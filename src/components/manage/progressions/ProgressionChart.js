import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

import Paper from "@mui/material/Paper";

import { UnitContext } from "../../../context/UnitContext";

Chart.defaults.color = "#AFC0CF";
Chart.defaults.borderColor = "#131821";

const ProgressionChart = ({ data }) => {
  const { unit } = useContext(UnitContext);

  const options = {
    responsive: true,
    animation: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          font: {
            family: "Regular",
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            console.log("context: ", context.dataset.label);
            context.raw = `${context.dataset.label}: ${context.raw}${unit}`;
            return context.raw;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return `${value}${unit}`;
          },
        },
      },
    },
  };
  return (
    <>
      <Paper sx={{ minHeight: "200px", padding: "10px" }}>
        <Line data={data} options={options} />
      </Paper>
    </>
  );
};

export default ProgressionChart;
