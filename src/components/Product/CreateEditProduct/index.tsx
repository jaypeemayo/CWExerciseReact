import { IProduct } from "..";

export interface ICreateEditProduct {
  OnSavedProduct(isCreate: boolean, product: IProduct): void;
  OnCloseCreateUpdate(): void;
  productToEdit?: IProduct;
}
