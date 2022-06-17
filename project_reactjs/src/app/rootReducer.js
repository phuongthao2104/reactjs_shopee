import { combineReducers } from "@reduxjs/toolkit";
import { loginReducer } from "./../features/login/loginSlice";
import { productReducer } from "./../features/product/productSlice";
import { orderReducer } from "./../features/order/orderSlice";


const rootReducer = combineReducers({
  signin: loginReducer,
  products: productReducer,
  order: orderReducer,
  
});

export default rootReducer;