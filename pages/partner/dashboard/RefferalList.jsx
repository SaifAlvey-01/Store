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

const xValues = ["02 Dec", "04 Dec", "06 Dec", "08 Dec", "10 Dec", "12 Dec", "14 Dec"];
const yValues1 = [15, 222, 15, 117, 113, 121, 16];

const data = {
  labels: xValues,
  datasets: [
    {
      label: "Dataset 1",
      data: yValues1,
      borderColor: "#47c3ff",
      backgroundColor: "#4162FF84",
      borderWidth: 3,
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

function RefferalList() {
  return (
    <div style={{ width: "100%", height: "300px", boxSizing: "border-box" }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default RefferalList;
