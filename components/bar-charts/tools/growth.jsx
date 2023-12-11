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

const customDottedLinePlugin = {
  id: "customDottedLine",
  afterDraw: (chart) => {
    const ctx = chart.ctx;
    const yAxis = chart.scales.y;
    const xAxis = chart.scales.x;

    const yValue = yAxis.getPixelForValue(8);
    const xStart = xAxis.left;
    const xEnd = xAxis.getPixelForTick(4); // Ends at "Oct" bar

    ctx.save();
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(xStart, yValue);
    ctx.lineTo(xEnd, yValue);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
  },
};
function GrowthChart() {
  const xValues = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const yValues = [0, 2, 4, 6, 8, 10, 12];

  const barColors = [
    "#B3C0FF",
    "#B3C0FF",
    "#B3C0FF",
    "#B3C0FF",
    "#4162FF",
    "#B3C0FF",
    "#B3C0FF",
  ];

  const data = {
    labels: xValues,
    datasets: [
      {
        data: yValues,
        backgroundColor: barColors,
        barPercentage: 0.1,
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
      title: {
        display: true,
        text: "World Wine Production 2018",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value, index, values) {
            return value + "k";
          },
        },
      },
      x: {
        grid: {
          // Notice 'grid' instead of 'gridLines'
          display: false, // This should remove the vertical grid lines
          drawBorder: false,
        },
      },
    },
    interaction: {
      intersect: false,
    },
    tooltips: {
      enabled: true,
      filter: function (tooltipItem) {
        // Show tooltip only for the "Oct" bar
        return tooltipItem.index === 4;
      },
      title: function (tooltipItems, data) {
        return ""; // No title for the tooltip
      },
      label: function (tooltipItem, data) {
        return "₹6,302"; // Static value for the tooltip
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Bar data={data} options={options} plugins={[customDottedLinePlugin]} />
    </div>
  );
}

export default GrowthChart;
