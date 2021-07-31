import { IProduct } from "..";

export interface IProductRow extends IProduct {
    OnDelete(productID: number): void;
    OnEdit(product: IProduct): void;
  }