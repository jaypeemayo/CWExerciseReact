import React from "react";
import Modal from "react-modal";
import { ICreateEditProduct } from ".";
import { IProduct } from "..";

export const CreateEditProduct: React.FunctionComponent<ICreateEditProduct> = ({ OnSavedProduct, CloseCreateUpdate, productToEdit }) => {
  const initialiseProduct = () => {
    if (productToEdit) {
      return productToEdit;
    } else {
      return { name: "", price: 0, type: 1, active: false } as IProduct;
    }
  };
  const [product, setProduct] = React.useState<IProduct>(initialiseProduct());
  const handleNameChange = (e) => {
    setProduct({
      ...product,
      name: e.target.value
    });
  };
  const handleNumberChange = (e) => {
    var x = Number(e.target.value).toFixed(2);
    setProduct({
      ...product,
      price: Number(x)
    });
  };
  const handleTypeChange = (e) => {
    setProduct({
      ...product,
      type: e.target.value
    });
  };
  const handleActiveChange = (e) => {
    setProduct({
      ...product,
      active: e.target.checked
    });
  };

  const handleSave = () => {
    OnSavedProduct(
      productToEdit === null
        ? true
        : false,
      product);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  };

  return (<Modal isOpen={true} style={customStyles}>
    <div>
      <div>
        {
          productToEdit === null
            ? "Create Product"
            : "Update Product"
        }
      </div>
      <label htmlFor="name">Name:</label>{" "}
      <input defaultValue={product.name} onChange={handleNameChange} maxLength={10} type="text" name="name" id="name" />
      <br></br>
      <label htmlFor="price">Price:</label>{" "}
      <input   onChange={handleNumberChange} value={product.price} type="number" name="price" id="price" step='0.01' placeholder='0.00'  />
      <br></br>
      <label id="type">Type</label>
      <select defaultValue={product.type} value={product.type} onChange={handleTypeChange}>
        <option value="1">Books</option>
        <option value="2">Electronics</option>
        <option value="3">Food</option>
        <option value="4">Furniture</option>
        <option value="5">Toys</option>
      </select>
      <br></br>
      <label htmlFor="active">Active:</label>{" "}
      <input defaultChecked={product.active}  onChange={handleActiveChange} type="checkbox" name="active" id="active" />
      <br></br>
      <button onClick={CloseCreateUpdate}>Close</button>
      <button onClick={handleSave}>Save</button>
    </div>
  </Modal>);
};
