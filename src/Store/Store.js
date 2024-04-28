import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Reducers/ProductReducer";

const Store = configureStore({
  reducer: {
    productReducer,
  },
  devTools: true,
});

export default Store;
