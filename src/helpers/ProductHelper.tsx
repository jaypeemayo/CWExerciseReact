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

  export function getAllProducts()
  {
     return axios.get('http://localhost:2553/api/product/').then(o=>{
         return o.data;
     });
  }

