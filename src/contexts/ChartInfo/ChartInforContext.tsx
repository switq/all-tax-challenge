import { createContext } from "react";

type ChartInfoContextType = {
    selectedProduct: string | null;
    selectedCategory: string | null;
    selectedBrand: string | null;
    setChartInfo: (type: "product" | "category" | "brand", value: string | null) => void;
};

export const ChartInfoContext = createContext<ChartInfoContextType | undefined>(undefined);