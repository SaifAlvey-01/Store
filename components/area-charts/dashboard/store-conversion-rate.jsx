import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

Chart.register(
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const customDottedLinePlugin = {
  id: "customDottedLine",
  afterDraw: (chart) => {
    const ctx = chart.ctx;
    const yAxis = chart.scales.y;
    const xAxis = chart.scales.x;

    const xValue = xAxis.getPixelForValue("19 Jul");
    const yStart = yAxis.getPixelForValue(0);
    const yEnd = yAxis.getPixelForValue(40);

    ctx.save();
    ctx.setLineDash([12, 10]);
    ctx.beginPath();
    ctx.moveTo(xValue, yStart);
    ctx.lineTo(xValue, yEnd);
    ctx.strokeStyle = "#25B160";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();
  },
};

function StoreConversionRateChart() {
  const xValues = ["02 Jul", "12 Jul", "15 Jul", "19 Jul", "22 Jul", "24 Jul"];
  const yValues = [10, 20, 25, 40, 25, 20];

  const lineData = {
    labels: xValues,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: yValues,
        borderColor: "#4162FF",
        backgroundColor: "#4162FF84",
        borderWidth: 2,
        pointRadius: (context) => {
          const index = context.dataIndex;
          return index === xValues.indexOf("19 Jul") ? 12 : 4;
        },
        tension: 0.4,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 0,
        max: 50,
        ticks: {
          stepSize: 5,
          callback: function (value, index, values) {
            return value;
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
      intersect: true,
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: "100%", height: "300px", boxSizing: "border-box" }}>
      <Line
        data={lineData}
        options={lineOptions}
        plugins={[customDottedLinePlugin]}
      />
    </div>
  );
}

export default StoreConversionRateChart;
