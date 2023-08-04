import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const WeightChart = ({ data }) => {
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
          text: "weight",
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
