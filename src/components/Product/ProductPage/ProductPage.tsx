import { createProduct, deleteProduct, getAllProducts, IProductGetParam, updateProduct } from "../helpers/ProductHelper"
import React, { useEffect } from 'react'
import { Table } from "../../../common/Table";
import { ProductRow } from "../ProductRow/ProductRow";
import Pagination from '@material-ui/lab/Pagination';
import { CreateEditProduct } from "../CreateEditProduct/CreateEditProduct";
import { MessageBox } from "../../../common/MessageBox";
import { IProduct } from "..";
import { IProductTableInfo } from ".";




export const ProductPage: React.FunctionComponent = () => {
  const defaultParam = {
    pageNumber: 1,
    pageSize: 5,
    columnToSort: "Name",
    sortDirection: 0,
  } as IProductGetParam;

  const defaulProducTableInfo = {
    numberOfPages: 0,
    products: []
  } as IProductTableInfo;

  const [productsTableInfo, setProductsTableInfo] = React.useState<IProductTableInfo>(defaulProducTableInfo);
  const [pageParam, setPageParam] = React.useState<IProductGetParam>(defaultParam);
  const [modal, setModal] = React.useState<any>();

  const getProducts = () => {
    getAllProducts(pageParam).then(o => {
      console.log(JSON.stringify(o));
      setProductsTableInfo(o)
    });
  }

  useEffect(() => {
    getProducts();
  }, [pageParam])

  const showMessageBox = (title: string, message: string) => {
    return setModal(<MessageBox title={title} buttonSet={<button onClick={() => { setModal(null) }}>Close</button>}>{message}</MessageBox>);
  }

  const showConfirmationBox = (id: number, title: string, message: string) => {
    return setModal(<MessageBox title={title} buttonSet={<><button onClick={() => { handleDelete(id); setModal(null); }}>Yes</button><button onClick={() => { setModal(null) }}>No</button></>}>{message}</MessageBox>);
  }

  const showCreateEditProduct = (productToEdit: IProduct) => {
    return setModal(<CreateEditProduct productToEdit={productToEdit} CloseCreateUpdate={() => { setModal(null); }} OnSavedProduct={handleSaveProduct} />);
  }

  const handleSaveProduct = (isCreating: boolean, product: IProduct) => {
    if (!isCreating) {
      updateProduct(product).then(o => {
        if (o) {
          getProducts();
          showMessageBox("Update Success", "Product Updated!");
        }
        else {
          showMessageBox("Update Failed", "Product Failed to Updated!");
        }
      });

    }
    else {
      createProduct(product).then(o => {

        if (o) {
          getProducts();
          showMessageBox("Create Success", "Product Created!");
        }
        else {
          showMessageBox("UpdCreatete Failed", "Product Failed to Create!");
        }
      });
    }
  }

  const handleDelete = (productID: number) => {
    deleteProduct(productID).then(o => {
      if (o) {
        getProducts();
      }
      else {
        showMessageBox("Delete Failed", "Product failed to delete!");
      }
    });
  }

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPageParam({ ...pageParam, pageNumber: page })
  }

  const handleClickHeader = (columnToSort: string) => {
    setPageParam({ ...pageParam, pageNumber: 1, sortDirection: pageParam.sortDirection ? 0 : 1, columnToSort })
  }

  return (
    <div>
      <div>
        <button onClick={() => showCreateEditProduct(null)}>Create Product</button>
        <Table columnNames={["ProductID", "Name", "Price", "Type", "Active", ""]}
          sortedColumnName={pageParam.columnToSort}
          isAscending={pageParam.sortDirection ? true : false}
          onClickHeader={handleClickHeader}>
          <>
            {productsTableInfo.products.map((product, i) => <ProductRow OnEdit={showCreateEditProduct} OnDelete={(id) => { showConfirmationBox(id, "Delete Product", "Are you sure you want to delete the product?") }} key={i} {...product} />)}
          </>
        </Table>
        <Pagination count={productsTableInfo.numberOfPages} page={pageParam.pageNumber} shape="rounded" onChange={handlePageChange} />
      </div>
      {modal}

    </div>

  );
}
