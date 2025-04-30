import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import BarChartIcon from '@mui/icons-material/BarChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { toggleChartType } from "../../../store/reducer/appPreferences";
import styled from "styled-components";

export const ButtonGroupContainer = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 10px;
    width: 60vw; 
    max-width: 800px;
 `;

function ToggleBar() {
    const dispatch = useDispatch();
    const handleChange = (_: React.MouseEvent<HTMLElement>, newType: "bar" | "line") => {
        if (newType !== null) {
            dispatch(toggleChartType(newType));
        }
    }

    const type = useSelector((state: RootState) => state.appPreferences.chartType);

    return (
        <ButtonGroupContainer>
            <ToggleButtonGroup onChange={handleChange} value={type} exclusive>
                <ToggleButton value={"line"}><TimelineIcon /></ToggleButton>
                <ToggleButton value={"bar"}><BarChartIcon /></ToggleButton>
            </ToggleButtonGroup>
        </ButtonGroupContainer>
    )
}

export default ToggleBar;