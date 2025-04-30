import { ChartOptions } from "chart.js";

export function chartOptions(): ChartOptions<"bar" | "line"> {
  return {
    responsive: true,
    interaction: {
      mode: "index",
      axis: "x",
      intersect: false,
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        onClick: () => {}
      },
      title: {
        display: true,
        text: "Vendas por mês:",
      },
      datalabels: {
        color: "#111",
        anchor: "end",
        align: "top",

      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
}