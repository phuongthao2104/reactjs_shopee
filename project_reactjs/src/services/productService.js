import { listProduct } from "./../api/productAPI";
async function productListService() {
    const response = await listProduct();
    return response;
  }

export const products = {productListService};
//detail