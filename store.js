import { configureStore } from "@reduxjs/toolkit";
import { cartSlice, limitSlice, productsSlice } from "./redux/slices";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
    limit: limitSlice,
  },
});
