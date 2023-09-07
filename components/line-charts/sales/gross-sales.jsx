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

function GrossSalesChart() {
  const xValues = ["", "12 Jul", ""];

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
          display: true,
          maxTicksLimit: 3,
          autoSkip: false,
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

export default GrossSalesChart;
