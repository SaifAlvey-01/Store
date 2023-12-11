import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarController, BarElement);

function TotalSalesChart() {
  const xValues = ["02 Jul", "12 Jul", "15 Jul", "19 Jul", "22 Jul", "24 Jul"];
  const yValues = [35, 25, 35, 46, 44, 26];

  const barColors = [
    "#E1E1E1",
    "#E1E1E1",
    "#E1E1E1",
    "#4162FF",
    "#E1E1E1",
    "#E1E1E1",
    "#E1E1E1",
  ];

  const data = {
    labels: xValues,
    datasets: [
      {
        data: yValues,
        backgroundColor: barColors,
        barPercentage: 0.16,
        categoryPercentage: 1.1,
        borderRadius: {
          topLeft: 10,
          topRight: 10,
          bottomLeft: 0,
          bottomRight: 0,
        },
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
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
    interaction: {
      intersect: false,
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: "100%", height: "300px", boxSizing: "border-box" }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default TotalSalesChart;
