import serviceCallApi from "../services/serviceApi";

async function orderCheckout(orderProduct,nameInfor) {
  try {
    const result = await serviceCallApi('order', 'POST', orderProduct, null, nameInfor.token);
    return result;
  } catch (error) {
    return error;
  }
}


export { orderCheckout };
