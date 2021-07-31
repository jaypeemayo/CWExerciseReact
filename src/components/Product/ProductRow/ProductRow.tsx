import React from "react";
import { IProductRow } from ".";
import { FaEdit, FaTrash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export const ProductRow: React.FunctionComponent<IProductRow> = ({
  productID,
  name,
  price,
  type,
  active,
  OnDelete,
  OnEdit
}) => {
  return (<tr>
    <td>{productID}</td>
    <td>{name}</td>
    <td>{price}</td>
    <td>{type}</td>
    <td>{
      active
        ? "true"
        : "false"
    }</td>
    <td>
      <a className="p-4" title="Delete" href="javascript:void(0)" onClick={() => {
        OnDelete(productID);
      }}>
        <FaTrash />
      </a>
      <a title="Delete" href="javascript:void(0)" onClick={() => {
        OnEdit({ productID, name, price, type, active });
      }}>
        <FaEdit />
      </a>
    </td>
  </tr>);
};
