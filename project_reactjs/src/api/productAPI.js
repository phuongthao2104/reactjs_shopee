import serviceCallApi from "../services/serviceApi";
// import { useParams } from "react-hooks / rules-of-hooks";

// const { product_id } = useParams();
async function listProduct() {
  try {
    const result = await serviceCallApi("products?page=1&limit=18&id=14", "GET");
    return result;
  } catch (error) {
    return error;
  }
}

async function detailProduct(product_id) {
  console.log(product_id, "id");
  try {
    const result = await serviceCallApi(`products/${product_id}`, "GET");
    return result;
  } catch (error) {
    return error;
  }
  
}
export { listProduct, detailProduct };
