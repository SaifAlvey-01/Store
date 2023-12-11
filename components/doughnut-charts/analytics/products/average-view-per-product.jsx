import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  ArcElement,
  DoughnutController,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, ArcElement, DoughnutController);

function AverageViewPerProductChart() {
  const xValues = ["Color1", "Color2"];
  const yValues = [40, 60];
  const barColors = ["#F5F5F5", "#E1E1E1"];

  const data = {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "World Wide Wine Production 2018",
    },
    cutout: "82%",
    plugins: {
      legend: { display: false },
    },
    elements: {
      arc: {
        borderRadius: 25,
      },
    },
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "240px",
        maxHeight: "220px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Doughnut data={data} options={options} />
      <span
        className="font-roboto"
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontWeight: 500,
          fontSize: "32px",
          color: "#8E8E8E",
          letterSpacing: 1,
        }}
      >
        0000
      </span>
      <span
        style={{
          position: "absolute",
          top: "58%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "12px",
        }}
      >
        Views
      </span>
    </div>
  );
}

export default AverageViewPerProductChart;
