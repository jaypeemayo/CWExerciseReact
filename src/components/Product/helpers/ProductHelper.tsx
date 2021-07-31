import { IProduct } from "..";
import configData from "../../../../configs/config.json";
const axios = require('axios');
const baseApiUrl = `${configData.SERVER_URL}/api`; 
export interface IProductGetParam {
   pageNumber: number;
   pageSize: number;
   columnToSort: string;
   sortDirection: number;
}

export function getAllProducts(productGetParam) {
   return axios.get(`${baseApiUrl}/product/`, { params: productGetParam }).then(o => {
      return o.data;
   });
}


export function createProduct(product: IProduct) {
   return axios.post(`${baseApiUrl}/product/`, JSON.stringify(product), {
      headers: {
         'Content-Type': 'application/json'
      }
   }).then(o => {
      return o.data;
   });
}

export function deleteProduct(productID: number) {
   return axios.delete(`${baseApiUrl}/product/${productID}`).then(o => {
      return o.data;
   });
}

export function updateProduct(product: IProduct) {
   return axios.put(`${baseApiUrl}/product/${product.productID}`, JSON.stringify(product), {
      headers: {
         'Content-Type': 'application/json'
      }
   }).then(o => {
      return o.data;
   });
}


