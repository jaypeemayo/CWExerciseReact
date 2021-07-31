import { render } from "@testing-library/react";
import * as React from "react";
import { IProductRow } from "../ProductRow";
import { CreateEditProduct } from "./CreateEditProduct";


jest.mock('react-modal', () => {
    const React = require('react');
    const TestReactModal = require('../../../../tests/__mocks__/mockReactModal');
    return TestReactModal.default;
  });

test("Test snapshot", () => {
    const onSavedProduct = jest.fn();
    const onCloseCreateUpdate = jest.fn();
    var product = {
        productID: 1,
        name: "string",
        price: 2,
        type: 2,
        active: false,
    } as IProductRow;
    const {container, unmount} = render(
        <CreateEditProduct OnSavedProduct={onSavedProduct}  OnCloseCreateUpdate={onCloseCreateUpdate} productToEdit={product}>
        </CreateEditProduct>
        ,
    );

    expect(container).toMatchSnapshot();
    unmount();
});


