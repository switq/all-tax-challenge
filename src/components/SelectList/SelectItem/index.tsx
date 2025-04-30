import { InputLabel, MenuItem, Select } from "@mui/material";
import { SelectItemInterface } from "../../../interfaces/select";
import { FieldContainer } from "./styles";

export interface SelectItemProps {
    label: string;
    id: "product" | "category" | "brand",
    value: string | null;
    optionList: SelectItemInterface[]
    onSelect?: (type: "product" | "category" | "brand", value: string | null) => void;
}

function SelectItem({ label, id, value, optionList, onSelect }: SelectItemProps) {
    return (
        <FieldContainer>
            <InputLabel>{label}:</InputLabel>
            <Select
                id={id}
                // label={label}
                value={value}
                fullWidth
                onChange={(e) => onSelect && onSelect(id, e.target.value)}
            >
                {optionList.map(({ id, name }) => (
                    <MenuItem value={id}>{name}</MenuItem>
                ))}
            </Select>
        </FieldContainer>
    );
}

export default SelectItem;