import { categoryMock } from './../../../dataMock';
import { Category } from './../../interfaces/product';
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  categories: categoryMock as Category[],
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
})

export default categoriesSlice.reducer;