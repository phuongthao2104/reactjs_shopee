import { orderCheckout} from "../api/orderAPI";
import serviceCallApi from "./serviceApi";
async function orderCheckoutService(orderProduct,nameInfor) {
    const result = await serviceCallApi('order', 'POST', orderProduct, null, nameInfor.token);
    return result;
}
async function orderGetListService(nameInfor) {
    const result = await serviceCallApi("order", "GET",null, null, nameInfor.token);
    return result;
}
export const order = {orderCheckoutService, orderGetListService};
