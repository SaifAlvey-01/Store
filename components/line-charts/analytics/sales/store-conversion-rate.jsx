import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController,
  LineElement,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineController,
  LineElement
);

function StoreConversionRateChart() {
  const xValues = ["02 Jul", "12 Jul", "15 Jul", "19 Jul", "22 Jul", "24 Jul"];

  const data = {
    labels: xValues,
    datasets: [],
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        ticks: { min: 1, max: 4, stepSize: 0.4 },
      },

      x: {
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          min: 1,
          max: 4,
          stepSize: 0.4,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: "100%", height: "120px" }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default StoreConversionRateChart;
