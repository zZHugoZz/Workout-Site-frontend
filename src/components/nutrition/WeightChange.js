import React from "react";
import { useState, useEffect } from "react";
import WeightChart from "./WeightChart";
import useInterceptor from "../../utils/useInterceptor";

const WeightChange = () => {
  const [labels, setLabels] = useState([]);
  const [datasets, setDatasets] = useState([]);
  const [unit, setUnit] = useState("");
  const [chartData, setChartData] = useState({
    labels: labels,
    datasets: datasets,
  });

  const axiosInterceptor = useInterceptor();

  useEffect(() => {
    axiosInterceptor.get("/bodyweights").then((response) => {
      setLabels(response.data.map((bodyweight) => bodyweight.date));
      setDatasets({
        label: "Weight",
        data: response.data.map((bodyweight) => bodyweight.weight),
        boderColor: "green",
        backgroundColor: "green",
        color: "#AFC0CF",
        tension: 0.1,
      });
    });
  }, []);

  useEffect(() => {
    setChartData({
      labels: labels,
      datasets: datasets,
    });
  }, [labels, datasets]);

  return (
    <>
      <h2>Weight change</h2>
      <WeightChart />
    </>
  );
};

export default WeightChange;
