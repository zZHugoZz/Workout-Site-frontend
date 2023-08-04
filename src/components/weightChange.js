import React from "react";
import { useState, useEffect } from "react";
import WeightChart from "./WeightChart";

const WeightChange = () => {
  const [datasets, setDatasets] = useState([]);
  const [chartData, setChartData] = useState({
    datasets: datasets,
  });

  useEffect(() => {
    setDatasets([
      {
        data: [
          {
            x: "2021-11-06 23:39:30",
            y: 50,
          },
          {
            x: "2021-11-07 01:00:28",
            y: 60,
          },
          {
            x: "2021-11-07 09:00:28",
            y: 20,
          },
        ],
      },
    ]);
  });

  return (
    <>
      <h2>Weight change</h2>
      <WeightChart data={chartData} />
    </>
  );
};

export default WeightChange;
