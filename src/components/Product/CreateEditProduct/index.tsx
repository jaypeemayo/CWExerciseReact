import { IProduct } from "..";

export interface ICreateEditProduct {
  OnSavedProduct(isCreate: boolean, product: IProduct): void;
  CloseCreateUpdate(): void;
  productToEdit?: IProduct;
}
