import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const xValues = ["02 Jul", "12 Jul", "15 Jul", "19 Jul", "22 Jul", "24 Jul"];
const yValues1 = [35, 15, 45, 24, 44, 26];
const yValues2 = [20, 36, 10, 35, 30, 22];

const data = {
  labels: xValues,
  datasets: [
    {
      label: "Dataset 1",
      data: yValues1,
      borderColor: "#4162FF",
      backgroundColor: "#4162FF84",
      borderWidth: 4,
      tension: 0,
      yAxisID: "y",
    },
    {
      label: "Dataset 2",
      data: yValues2,
      borderColor: "#8E8E8E",
      backgroundColor: "#25B16084",
      borderWidth: 4,
      tension: 0,
      yAxisID: "y",
    },
  ],
};

const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    y: {
      beginAtZero: false,
      min: 0,
      max: 50,
      ticks: {
        stepSize: 5,
        callback: function (value, index, values) {
          return "₹" + value;
        },
      },
    },
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
};

function TotalOrdersChart() {
  return (
    <div style={{ width: "100%", height: "300px", boxSizing: "border-box" }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default TotalOrdersChart;
