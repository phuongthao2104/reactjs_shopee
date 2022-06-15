import { listProduct , detailProduct} from "./../api/productAPI";
async function productListService() {
    const response = await listProduct();
    return response;
  }
  async function productDetailService(setProduct, product_id) {
    const response = await detailProduct(product_id);
    if(response.success) {
            setProduct(response.data);
          }
    return response;
  }
export const products = {productListService, productDetailService};
//detail