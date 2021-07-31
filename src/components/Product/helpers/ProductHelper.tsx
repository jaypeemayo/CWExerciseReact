import { IProduct } from "..";

const axios = require('axios');

export interface IProductGetParam {
   pageNumber: number;
   pageSize: number;
   columnToSort: string;
   sortDirection: number;
}

export function getAllProducts(productGetParam) {
   return axios.get('http://localhost:5000/api/product/', { params: productGetParam }).then(o => {
      return o.data;
   });
}


export function createProduct(product: IProduct) {
   return axios.post('http://localhost:5000/api/product/', JSON.stringify(product), {
      headers: {
         'Content-Type': 'application/json'
      }
   }).then(o => {
      return o.data;
   });
}

export function deleteProduct(productID: number) {
   return axios.delete(`http://localhost:5000/api/product/${productID}`).then(o => {
      return o.data;
   });
}

export function updateProduct(product: IProduct) {
   return axios.put(`http://localhost:5000/api/product/${product.productID}`, JSON.stringify(product), {
      headers: {
         'Content-Type': 'application/json'
      }
   }).then(o => {
      return o.data;
   });
}


