import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { payloadCreate } from "../../untils";
import { order } from "../../services/orderService";

  export const orderCheckout = createAsyncThunk("order/checkout",
  async function({ orderProduct, nameInfor }) {
    const data = await order.orderCheckoutService(orderProduct, nameInfor);
    return data;
  }
  );
  export const orderGetList = createAsyncThunk("order/getList",async function({ nameInfor }) {
    const data = await order.orderGetListService(nameInfor);
    return data;
  });
  const initialState = {
    loading: false,
    error: null,
    loggedIn: false,
    loggedInUser: null,
    token: null,
    data: {},
  };
  export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: {
    [orderCheckout.pending]: startLoading,
    [orderCheckout.fulfilled]: (state, { payload }) => {
      const { token, user, data } = payload;

      Object.assign(state, {
        loading: false,
        loggedIn: true,
        loggedInUser: user,
        token,loading: false,
        loggedIn: true,
        loggedInUser: user,
        token,
        data: data.data,
      });
    },
    [orderCheckout.rejected]: receiveError,

    [orderGetList.pending]: startLoading,
    [orderGetList.fulfilled]: (state, { payload }) => {
      const {token} = payload;
      Object.assign(state, {
        loading: false,
        loggedIn: true,        
        token,loading: false,
        loggedIn: true,
        token,        
      }
      );
      // console.log(action.payload.result);
      // console.log(typeof action)
    },
    [orderGetList.rejected]: receiveError,

    },
  });
  function startLoading(state) {
    Object.assign(state, {
      loading: true,
      error: null,
    });
  }
  
  function receiveError(state, action) {
    Object.assign(state, {
      loading: false,
      error: action.error,
    });
  }
  
  export const selectOrder = (state) => state.order;

  export const orderReducer = orderSlice.reducer;