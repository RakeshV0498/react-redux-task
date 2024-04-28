import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Reducers/ProductReducer";
import cartReducer from "../Reducers/CartReducer";

const Store = configureStore({
  reducer: {
    productReducer,
    cartReducer,
  },
  devTools: true,
});

export default Store;
