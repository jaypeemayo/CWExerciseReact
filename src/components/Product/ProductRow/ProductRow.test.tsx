import { render } from "@testing-library/react";
import * as React from "react";
import { IProductRow } from ".";
import { ProductRow } from "./ProductRow";

test("Test snapshot", () => {
    const onDelete = jest.fn();
    const onEdit = jest.fn();
    var product = {
        productID: 1,
        name: "string",
        price: 2,
        type: 2,
        active: false,
    } as IProductRow;
    const {container, unmount} = render(
        <ProductRow OnDelete={onDelete}  OnEdit={onEdit} {...product}>
        </ProductRow>
    );
    expect(container).toMatchSnapshot();
    unmount();
});


