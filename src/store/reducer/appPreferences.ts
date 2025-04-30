import { createSlice } from "@reduxjs/toolkit";

interface Props {
    chartType: "bar" | "line";
}

const initialState = {
  chartType: "line"
} as Props;

const appPreferencesSlice = createSlice({
  name: "appPreferences",
  initialState,
  reducers: {
    toggleChartType(state, action: {payload: "bar" | "line"}) {
        const type = action.payload;
        return { ...state, chartType: type };
    }
  },
});

export default appPreferencesSlice.reducer;
export const { toggleChartType } = appPreferencesSlice.actions;
