import { cartSlice } from "./features";
import { combineReducers } from "redux";

export const reducer = combineReducers({
  cart: cartSlice.reducer,
});
