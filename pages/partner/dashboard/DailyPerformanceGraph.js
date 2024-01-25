"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";

const DailyPerformanceGraph = () => {
  const chartData = {
    series: [
      {
        name: "Wins",
        data: [44, 55, 41, 67, 22],
      },
      {
        name: "Losses",
        data: [13, 23, 20, 8, 13],
      },
    ],
    options: {
      chart: {
        type: "bar",
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      colors: ["#1e2023", "#5F78E9"],
      plotOptions: {
        bar: {
          columnWidth: "25px", // Set the width of the bars
          borderRadius: 13,
          borderRadiusApplication: "around",
          borderRadiusWhenStacked: "all",
          dataLabels: {
            maxItems: 20,
          },
        },
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none", // Remove hover effect
          },
        },
        active: {
          filter: {
            type: "none", // Remove active (click) effect, if desired
          },
        },
      },
      grid: {
        borderColor: "#1c1e20",
        strokeDashArray: 3,
        row: {
          colors: ["transparent"],
        },
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        title: {
          style: {
            color: "#637381",
          },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        show: false,
      },
      tooltip: {
        theme: "dark",
      },
      dataLabels: {
        enabled: false,
      },
    },
  };

  return (
    <div className="flex flex-col gap-y-6 py-6">
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

const blueCircle = (
  <svg
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="0.200195" width="12" height="12" rx="6" fill="#5F78E9" />
  </svg>
);

const grayCircle = (
  <svg
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="0.200195" width="12" height="12" rx="6" fill="#7A7A7A" />
  </svg>
);

export default DailyPerformanceGraph;