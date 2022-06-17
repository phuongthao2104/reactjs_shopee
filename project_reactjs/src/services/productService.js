import { listProduct , detailProduct} from "./../api/productAPI";
import serviceCallApi from "./serviceApi";
async function productListService() {
    const response = await listProduct();
    return response;
  }
async function productDetailService(product_id) {
  const result = await serviceCallApi(`products/${product_id}`, "GET");
  return result;
    // const response = await detailProduct(product_id);
    // if(response.success) {
    //         setProduct(response.data);
    //       }
    // return response;
  }



export const products = {productListService, productDetailService};
//detail