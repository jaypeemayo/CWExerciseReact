import React, { useEffect } from 'react'
const axios = require('axios');


export interface IProduct {
  productID: number;
  name: string;
  price: number;
  type: number;
  active: boolean;

}

export const Product: React.FunctionComponent<IProduct> = ({productID, name, price, type, active }) => {
  return (
     <tr>
       <td>{productID}</td>
       <td>{name}</td>
       <td>{price}</td>
       <td>{type}</td>
       <td>{active ? "true": "false"}</td>
     </tr>
  );
}
