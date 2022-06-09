import serviceCallApi from "../services/serviceApi";

async function listProduct() {
  try {
    const result = await serviceCallApi("products?page=1&limit=18&id=14", "GET");
    return result;
  } catch (error) {
    return error;
  }
}
export { listProduct };
