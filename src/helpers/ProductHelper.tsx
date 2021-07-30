const axios = require('axios');


export function plus(x, y) {
    return x + y;
  }

  export function minus(x, y) {
    return x - y;
  }

  export function multiply(x, y) {
    return x * y;
  }

  export function divide(x, y) {
    return x / y;
  }

  export interface IProductGetParam {
    pageNumber: number;
    pageSize: number;
    columnToSort: string;
    sortDirection: number;
  }


  
  export function getAllProducts(productGetParam)
  {
     return axios.get('http://localhost:2553/api/product/', {params:productGetParam}).then(o=>{
         return o.data;
     });
  }


