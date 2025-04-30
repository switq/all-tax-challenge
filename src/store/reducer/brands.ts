import { createSlice } from "@reduxjs/toolkit";
import { Brand } from "../../interfaces/product";
import { brandMock } from "../../../dataMock";

const initialState = {
  brands: brandMock as Brand[],
  loading: false,
  error: null,
};

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
});

export default brandsSlice.reducer;
