import {getAllProducts} from "../helpers/ProductHelper"
import React, { useEffect } from 'react'
import { hot } from "react-hot-loader";
import { Table } from "../common/Table";
import { IProduct, Product } from "./Product";
import Modal from 'react-modal';

const axios = require('axios');


export interface IProductPage {
  CustomerId: number;
}

export const ProductPage: React.FunctionComponent<IProductPage> = ({CustomerId }) => {

  const  initialiseProducts = () => {
    // axios.get('http://localhost:2553/api/product/').then(o=>{
    //   setProducts(JSON.stringify(o));
    // })

    getAllProducts().then(o=>{
      console.log(JSON.stringify(o));
         setProducts(o)});
  }

  //const [customID, setCusetomerId] = React.useState<number>(CustomerId);
  const [products, setProducts] = React.useState<IProduct []>([]);
  const [isCreating, setIsCreating] = React.useState<boolean>(false); //todo isCreatingUpdate
  useEffect(() => {
    initialiseProducts();
  }, [])


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
      <Table  head={<tr>
          <th scope="col">ProductID</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Type</th>
          <th scope="col">Active</th>
      </tr>}>
      <>
        {products.map((product, i) => <Product key={i} {...product} />)}
      </>
      </Table>
    </div>:
    <div>
      CREATING!
      <button onClick={closeCreateUpdate}>Close</button>
      <button onClick={closeCreateUpdate}>Save</button>
    </div>}

    <Modal
      isOpen={true}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      Im a modal!
    </Modal>



    

  
  </div>



  );
}
