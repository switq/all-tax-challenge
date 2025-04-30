import { useSelector } from "react-redux";
import SelectItem, { SelectItemProps } from "./SelectItem";
import { RootState } from "../../store";
import { useContext } from "react";
import { ChartInfoContext } from "../../contexts/ChartInfo/ChartInforContext";
import { SelectListContainer } from "./styles";


function SelectList() {
    const context = useContext(ChartInfoContext);
    if (!context) {
        throw new Error("useChartInfo must be used within a ChartInfoProvider");
    }

    const categories = useSelector((state: RootState) => state.categories.categories);
    const products = useSelector((state: RootState) => state.products.products)
        .filter(product => product.category === context.selectedCategory);
    const brands = useSelector((state: RootState) => state.brands.brands)
        .filter(brand => brand.category === context.selectedCategory && brand.product === context.selectedProduct);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mapToIdAndName = (items: any[]) => {
        return items.map(item => ({
            id: item.id,
            name: item.name,
        }));
    };

    const categoriesMapped = mapToIdAndName(categories);
    const productsMapped = mapToIdAndName(products);
    const brandsMapped = mapToIdAndName(brands);

    const selectors: SelectItemProps[] = [
        {
            label: "Categoria",
            id: "category",
            value: context.selectedCategory,
            optionList: categoriesMapped,
        },
        {
            label: "Produto",
            id: "product",
            value: context.selectedProduct,
            optionList: productsMapped,
        },
        {
            label: "Marca",
            id: "brand",
            value: context.selectedBrand,
            optionList: brandsMapped,
        },
    ];

    const onSelect = (type: "product" | "category" | "brand", value: string | null) => {
        context.setChartInfo(type, value);
    };

    return (
        <SelectListContainer>
            {selectors.map(selecProps => (
                <SelectItem
                    key={selecProps.id}
                    {...selecProps}
                    onSelect={onSelect}
                />
            ))}
        </SelectListContainer>
    );
}

export default SelectList;