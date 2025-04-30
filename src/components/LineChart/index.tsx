import { Line } from "react-chartjs-2";
import { chartOptions } from "./options";
import { BarElement, CategoryScale, Chart, Filler, Legend, LinearScale, LineElement, PointElement, scales, Title, Tooltip } from "chart.js";
import { useContext } from "react";
import { ChartInfoContext } from "../../contexts/ChartInfo/ChartInforContext";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ChartDataLabels from "chartjs-plugin-datalabels";
import ToggleBar from "./ToggleBar";

Chart.register(
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

)

function LineChart() {
    const context = useContext(ChartInfoContext);
    if (!context) {
        throw new Error("useChartInfo must be used within a ChartInfoProvider");
    }

    const brand = useSelector((state: RootState) => state.brands.brands.find((brand) => brand.id === context.selectedBrand));
    const data = [...(brand?.sales ? brand.sales : [])];
    const label = brand?.name

    return (
        <>
            <div style={{ height: "60vh", maxHeight: "500px", width: "60vw", maxWidth: "800px" }}>
                <Line
                    options={chartOptions()}
                    plugins={[ChartDataLabels]}
                    data={{
                        labels: ["Janeiro", "Fevereiro", "Abril", "Maio",],
                        datasets: [{
                            data,
                            label,
                            backgroundColor: "#3b69b9",
                            pointRadius: 4,
                            borderColor: "#3b69b9ca",
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            type: "bar" as any,
                        },]
                    }}
                />
            </div>
            <ToggleBar />
        </>
    );
}

export default LineChart;