import { listProduct , detailProduct} from "./../api/productAPI";
import serviceCallApi from "./serviceApi";
async function productListService() {
    const response = await listProduct();
    return response;
  }
async function productDetailService(product_id) {
  const result = await serviceCallApi(`products/${product_id}`, "GET");
  return result;
  }



export const products = {productListService, productDetailService};
//detail