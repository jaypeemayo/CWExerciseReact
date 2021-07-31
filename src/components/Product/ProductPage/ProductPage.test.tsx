import { render } from "@testing-library/react";
import * as React from "react";
import { IProduct } from "..";
import { ProductPage } from "./ProductPage";
var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

jest.mock("../../../common/Table/Table", () => {
    return {
        Table: (props: any) => {
            return <table>{props.children}</table>;
        }
    };
});

jest.mock("../ProductRow/ProductRow", () => {
    return {
        Table: (props: any) => {
            return <div>product row</div>;
        }
    };
});

jest.mock("@material-ui/lab/Pagination", () => ()=>{return <div>pagination mock</div>});

jest.mock("../CreateEditProduct/CreateEditProduct", () => {
    return {
        CreateEditProduct: (props: any) => {
            return <div>create edit product mock</div>;
        }
    };
});


jest.mock("../../../common/MessageBox/MessageBox", () => {
    return {
        MessageBox: (props: any) => {
            return <div>create edit product mock</div>;
        }
    };
});

test("Test snapshot", () => {
    var product = {
        productID: 1,
        name: "string",
        price: 2,
        type: 2,
        active: false,
    } as IProduct;
    const {container, unmount} = render(
        <ProductPage />
    );
    expect(container).toMatchSnapshot();
    unmount();
});


test("test load rows", () => {
    var mock = new MockAdapter(axios);
    mock.onGet("http://localhost:5000/api/product/?pageNumber=1&pageSize=5&columnToSort=Name&sortDirection=0").reply(200, {
        data: [product],
      });

    var product = {
        productID: 1,
        name: "string",
        price: 2,
        type: 2,
        active: false,
    } as IProduct;
    const {container, unmount} = render(
        <ProductPage />
    );
    expect(container).toMatchSnapshot();
    unmount();
});


