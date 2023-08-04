import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";
import format from "date-fns/format";

ChartJS.register(
  LineElement,
  TimeScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const currentDate = new Date();

const WeightChart = () => {
  const data = {
    labels: [
      format(currentDate, "yyyy-MM-dd"),
      format(new Date().setDate(currentDate.getDate() + 1), "yyyy-MM-dd"),
      format(new Date().setDate(currentDate.getDate() + 2), "yyyy-MM-dd"),
      format(new Date().setDate(currentDate.getDate() + 3), "yyyy-MM-dd"),
    ],
    datasets: [
      {
        label: "some label",
        data: [1, 2, 1.5, 3],
        backgroundColor: "aqua",
        borderColor: "white",
        tension: 0.4,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
        },
      },
    },
  };
  return (
    <>
      <div>
        <Line data={data} options={options} />
      </div>
    </>
  );
};

export default WeightChart;
