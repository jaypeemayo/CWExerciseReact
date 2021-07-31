import React from "react";
import Modal from "react-modal";
import { ICreateEditProduct } from ".";
import { IProduct } from "..";
import 'bootstrap/dist/css/bootstrap.min.css';

export const CreateEditProduct: React.FunctionComponent<ICreateEditProduct> = ({ OnSavedProduct, OnCloseCreateUpdate, productToEdit }) => {
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
      transform: "translate(-50%, -50%)",
      padding: "0px",
      width: "400px",
    }
  };

  return (
    <Modal ariaHideApp={false} isOpen={true} style={customStyles}>
      <div className="modal-content">
        <div className="modal-header">
          <h5>
            {
              productToEdit === null
                ? "Create Product"
                : "Update Product"
            }
          </h5>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group pb-3">
              <label htmlFor="name">Name:</label>{" "}
              <input className="form-control" defaultValue={product.name} onChange={handleNameChange} maxLength={10} type="text" name="name" id="name" />
            </div>

            <div className="form-group pb-3">
              <label htmlFor="price">Price:</label>{" "}
              <input className="form-control" onChange={handleNumberChange} value={product.price} type="number" name="price" id="price" step='0.01' placeholder='0.00' />
            </div>

            <div className="form-group pb-3">
              <label id="type">Type</label>
              <select className="form-control" value={product.type} onChange={handleTypeChange}>
                <option value="1">Books</option>
                <option value="2">Electronics</option>
                <option value="3">Food</option>
                <option value="4">Furniture</option>
                <option value="5">Toys</option>
              </select>
            </div>

            <div className="form-check">
              <input className="form-check-input" defaultChecked={product.active} onChange={handleActiveChange} type="checkbox" name="active" id="active" />
              <label htmlFor="active">Active</label>
            </div>
          </form>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={OnCloseCreateUpdate}>Close</button>
          <button className="btn btn-primary" onClick={handleSave}>Save</button>
        </div>
      </div>
    </Modal>
  );
};
