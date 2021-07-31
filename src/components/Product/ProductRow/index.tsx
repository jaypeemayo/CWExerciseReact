import { IProduct } from "..";

export interface IProductRow extends IProduct {
    OnDelete(productID: number): void;
    OnEdit(product: IProduct): void;
    productID: number;
    name: string;
    price: number;
    type: number;
    active: boolean;
  }