import { IProductRow } from ".";

export const ProductRow: React.FunctionComponent<IProductRow> = ({ productID, name, price, type, active, OnDelete, OnEdit }) => {
  return (
    <tr>
      <td>{productID}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{type}</td>
      <td>{active ? "true" : "false"}</td>
      <td><a href='javascript:void(0)' onClick={() => { OnDelete(productID) }}>Delete</a><a href='javascript:void(0)' onClick={() => { OnEdit({ productID, name, price, type, active }) }}>Edit</a></td>
    </tr>
  );
}
