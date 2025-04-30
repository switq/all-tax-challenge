import { Chart } from "react-chartjs-2";
import ChartJs from 'chart.js/auto';
import { chartOptions } from "./options";
import { BarElement, CategoryScale, ChartData, Filler, Legend, LinearScale, LineElement, PointElement, scales, Title, Tooltip } from "chart.js";
import { useContext } from "react";
import { ChartInfoContext } from "../../contexts/ChartInfo/ChartInforContext";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ChartDataLabels from "chartjs-plugin-datalabels";
import ToggleBar from "./ToggleBar";
import { ChartContainer } from "./styles";

ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    scales,
    Filler,
    PointElement,
);

function LineChart() {
    const context = useContext(ChartInfoContext);
    if (!context) {
        throw new Error("useChartInfo must be used within a ChartInfoProvider");
    }

    const brand = useSelector((state: RootState) => state.brands.brands.find((brand) => brand.id === context.selectedBrand));
    const chartType = useSelector((state: RootState) => state.appPreferences.chartType);
    const data = [...(brand?.sales ? brand.sales : [])];
    const label = brand?.name;

    return (
        <>
            <ChartContainer>
                <Chart
                    type={chartType}
                    options={chartOptions()}
                    plugins={[ChartDataLabels]}
                    data={{
                        labels: ["Janeiro", "Fevereiro", "Março", "Abril"],
                        datasets: [{
                            data,
                            label,
                            backgroundColor: "#3b69b9",
                            pointRadius: 4,
                            borderColor: "#3b69b9ca",
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            type: chartType as any,
                        }]
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    } as ChartData<any>}
                />
            </ChartContainer>
            <ToggleBar />
        </>
    );
}

export default LineChart;