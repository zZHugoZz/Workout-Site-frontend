import React from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

Chart.defaults.color = "#AFC0CF";
Chart.defaults.borderColor = "#131821";

const ProgressionChart = () => {
  const options = {
    responsive: true,
    animation: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          font: {
            family: "Light",
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
      <div style={{ position: "relative", minHeight: "300px" }}>
        <Line data={data} options={options} />
      </div>
    </>
  );
};

export default ProgressionChart;
