import { createProduct, deleteProduct, getAllProducts, IProductGetParam, updateProduct } from "../helpers/ProductHelper"
import React, { useEffect } from 'react'
import { Table } from "../../../common/Table";
import { ProductRow } from "../ProductRow/ProductRow";
import Pagination from '@material-ui/lab/Pagination';
import { CreateEditProduct } from "../CreateEditProduct/CreateEditProduct";
import { MessageBox } from "../../../common/MessageBox";
import { IProduct } from "..";
import { IProductTableInfo } from ".";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

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
    return setModal(<MessageBox title={title} buttonSet={<button className="btn btn-primary" onClick={() => { setModal(null) }}>Close</button>}>{message}</MessageBox>);
  }

  const showConfirmationBox = (id: number, title: string, message: string) => {
    return setModal(<MessageBox title={title} buttonSet={<><button className="btn btn-primary" onClick={() => { handleDelete(id); setModal(null); }}>Yes</button><button className="btn btn-secondary" onClick={() => { setModal(null) }}>No</button></>}>{message}</MessageBox>);
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
      <div className="container">
        <h5 className="pt-5 pb-1">
          Product Management System
        </h5>
        <Table columnNames={["ProductID", "Name", "Price", "Type", "Active", ""]}
          sortedColumnName={pageParam.columnToSort}
          isAscending={pageParam.sortDirection ? true : false}
          onClickHeader={handleClickHeader}>
          <>
            {productsTableInfo.products.map((product, i) => <ProductRow OnEdit={showCreateEditProduct} OnDelete={(id) => { showConfirmationBox(id, "Delete Product", "Are you sure you want to delete the product?") }} key={i} {...product} />)}
          </>
        </Table>
        <div className={"d-flex justify-content-end"}>
          <Pagination count={productsTableInfo.numberOfPages} page={pageParam.pageNumber} shape="rounded" onChange={handlePageChange} />
        </div>
        <div className={"d-flex justify-content-center"}>
          <Button variant="primary" onClick={() => showCreateEditProduct(null)}>Create Product</Button>
        </div>
      </div>

      {modal}

    </div>

  );
}
