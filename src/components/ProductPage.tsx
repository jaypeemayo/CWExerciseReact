import {getAllProducts, IProductGetParam} from "../helpers/ProductHelper"
import React, { useEffect } from 'react'
import { hot } from "react-hot-loader";
import { Table } from "../common/Table";
import { Product } from "./Product";
import Modal from 'react-modal';
import { CpuInfo } from "os";
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import Pagination from '@material-ui/lab/Pagination';

const axios = require('axios');


export interface IProductPage {
  CustomerId: number; //to remove
}

export interface IProduct {
  productID: number;
  name: string;
  price: number;
  type: number;
  active: boolean;
}


export interface IProductTableInfo {
  numberOfPages : number,
  products : IProduct[],
}


export const ProductPage: React.FunctionComponent<IProductPage> = ({CustomerId }) => {

   const defaultParam = {
      pageNumber: 1,
      pageSize: 5,
      columnToSort: "Name",
      sortDirection: 1,
  } as IProductGetParam;

  const defaulProducTableInfo = {
    numberOfPages : 0,
    products: []
  } as IProductTableInfo;

  const  getProducts = () => {
    getAllProducts(pageParam).then(o=>{
      console.log(JSON.stringify(o));
         setProductsTableInfo(o)});
  }

  //const [customID, setCusetomerId] = React.useState<number>(CustomerId);
  const [productsTableInfo, setProductsTableInfo] = React.useState<IProductTableInfo>(defaulProducTableInfo);
  const [isCreating, setIsCreating] = React.useState<boolean>(false); //todo isCreatingUpdate
  const [pageParam, setPageParam] = React.useState<IProductGetParam>(defaultParam);

  useEffect(() => {
    getProducts();
  }, [pageParam])


  const createProduct = () =>{
    setIsCreating(true);
  }


  const closeCreateUpdate = () =>{
    setIsCreating(false);
  }

  const afterOpenModal = () =>{

  }
  const closeModal = () =>{
    
  }
  const sortRows = (columnToSort: string) =>{    
    setPageParam({...pageParam, pageNumber:1, sortDirection: pageParam.sortDirection ? 0 : 1, columnToSort})
  }

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) =>{
    setPageParam({...pageParam, pageNumber: page})
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    
  <div>
    {!isCreating ? 
    <div>
      <button onClick={createProduct}>Create Product</button>
      <Table columnNames = {["ProductID", "Name", "Price", "Type", "Active"]} 
        sortedColumnName={pageParam.columnToSort} 
        isAscending={pageParam.sortDirection ? true : false}
        onClickHeader={sortRows}>
      <>
        {productsTableInfo.products.map((product, i) => <Product key={i} {...product} />)}
      </>
      </Table>
      <Pagination count={productsTableInfo.numberOfPages} page={pageParam.pageNumber}  shape="rounded" onChange={handlePageChange} />
    </div>:
    <div>
      CREATING!
      <button onClick={closeCreateUpdate}>Close</button>
      <button onClick={closeCreateUpdate}>Save</button>
    </div>}

    <Modal
      isOpen={false}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Are you sure you want to Delete?"
    >
      Im a modal!
    </Modal>



    

  
  </div>



  );
}
