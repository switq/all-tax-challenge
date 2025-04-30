import React, { useState, ReactNode } from "react";
import { ChartInfoContext } from "./ChartInforContext";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const ChartInfoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState<string | null>("p1");
    const [selectedCategory, setSelectedCategory] = useState<string | null>("c1");
    const [selectedBrand, setSelectedBrand] = useState<string | null>("b1");

    const products = useSelector((state: RootState) => state.products.products);
    const brands = useSelector((state: RootState) => state.brands.brands);

    const setChartInfo = (type: "product" | "category" | "brand", value: string | null) => {
        
        if (type === "category") {
            setSelectedCategory(value); 
            const product = products.find(product => product.category == value)?.id || null;
            setSelectedProduct(product);
            const brand = brands.find(brand => brand.category == value && brand.product == product)?.id || null;
            setSelectedBrand(brand);   
            
        } else if (type === "product") {
            setSelectedProduct(value);
            const brand = brands.find(brand => brand.category == selectedCategory && brand.product == value)?.id || null;
            setSelectedBrand(brand);   
        } else if (type === "brand") {
            setSelectedBrand(value);
        }
    };

    return (
        <ChartInfoContext.Provider
            value={{ selectedProduct, selectedCategory, selectedBrand, setChartInfo }}
        >
            {children}
        </ChartInfoContext.Provider>
    );
};
