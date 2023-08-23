import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import "chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm";
import dayjs from "dayjs";

import Paper from "@mui/material/Paper";

import { UnitContext } from "../../../context/UnitContext";
import { ProgressionsContext } from "../../../context/ProgressionsContext";

Chart.defaults.color = "black";
Chart.defaults.borderColor = "rgba(0, 0, 0, 0.12)";

const ProgressionChart = () => {
  const { unit } = useContext(UnitContext);
  const { progressions } = useContext(ProgressionsContext);

  const data = {
    labels: [
      dayjs().format("YYYY-MM-DD"),
      dayjs().add(1, "day").format("YYYY-MM-DD"),
      dayjs().add(2, "day").format("YYYY-MM-DD"),
      dayjs().add(3, "day").format("YYYY-MM-DD"),
      dayjs().add(4, "day").format("YYYY-MM-DD"),
    ],
    datasets: progressions.map((progression) => ({
      label: progression.name,
      borderColor: progression.color,
      backgroundColor: progression.color,
      data: progression.performances.map((performance) => ({
        x: performance.date,
        y: performance.weight,
      })),
    })),
  };

  const options = {
    responsive: true,
    animation: false,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            console.log("context: ", context);
            context.raw = `${context.dataset.label}: ${context.formattedValue}${unit}`;
            return context.raw;
          },
        },
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
          displayFormats: {
            day: "yyyy-MM-dd",
          },
        },
      },
      y: {
        suggestedMin: 10,
        suggestedMax: 100,
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
      <Paper
        sx={{ minHeight: "200px", padding: "10px", backgroundColor: "#f9ffdf" }}
      >
        <Line data={data} options={options} />
      </Paper>
    </>
  );
};

export default ProgressionChart;
