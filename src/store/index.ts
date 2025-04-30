import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./reducer/categories";
import productsSlice from "./reducer/products";
import brandsSlice from "./reducer/brands";
import appPreferencesSlice from "./reducer/appPreferences";


const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
        brands: brandsSlice,
        appPreferences: appPreferencesSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;