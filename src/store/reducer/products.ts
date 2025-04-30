import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../interfaces/product";
import { productMock } from "../../../dataMock";

const initialState = {
  products: productMock as Product[],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
