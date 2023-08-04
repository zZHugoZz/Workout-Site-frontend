import React from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const WeightChart = () => {
  const options = {
    responsive: true,
    animation: false,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "time",
        time: {
          unit: "month",
        },
      },
    },
  };
  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default WeightChart;
