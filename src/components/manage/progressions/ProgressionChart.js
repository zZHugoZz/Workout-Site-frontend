import React from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

Chart.defaults.color = "#AFC0CF";
Chart.defaults.borderColor = "#131821";

const ProgressionChart = ({ data, unit }) => {
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
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Sessions",
        },
      },
      y: {
        title: {
          display: true,
          text: `Weight (${unit})`,
        },
      },
    },
  };
  return (
    <>
      {/* <div style={{ position: "relative", minHeight: "200px", width: "100%" }}>
        <Line data={data} options={options} />
      </div> */}
      <Paper sx={{ minHeight: "200px", padding: "10px" }}>
        <Line data={data} options={options} />
      </Paper>
    </>
  );
};

export default ProgressionChart;
