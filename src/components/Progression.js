import React from "react";
import { useState, useEffect } from "react";
import useInterceptor from "../utils/useInterceptor";
import ProgressionChart from "./ProgressionChart";

const Progression = () => {
  const [progressions, setProgressions] = useState([]);
  const [datasets, setDatasets] = useState([]);
  const [longestProgression, setLongestProgression] = useState(0);
  const [unit, setUnit] = useState("");
  const [labels, setLabels] = useState([1, 2, 3, 4, 5]);
  const [chartData, setChartData] = useState({
    labels: labels,
    datasets: datasets,
  });

  const axiosInterceptor = useInterceptor();

  useEffect(() => {
    axiosInterceptor.get("/units/1/").then((response) => {
      setUnit(response.data.unit);
    });
  }, []);

  useEffect(() => {
    axiosInterceptor.get("/progression").then((response) => {
      const lengths = response.data.map(
        (progression) => progression.performances.length
      );
      setProgressions(response.data);
      setLongestProgression(Math.max(...lengths));
      setDatasets(
        response.data.map((progression) => ({
          label: progression.name,
          data: progression.performances.map(
            (performance) => performance.weight
          ),
          borderColor: progression.color,
          backgroundColor: progression.color,
          color: "#AFC0CF",
        }))
      );
    });
  }, []);

  useEffect(() => {
    setChartData({
      labels: labels,
      datasets: datasets,
    });
  }, [labels, datasets]);

  useEffect(() => {
    if (longestProgression > labels.length) {
      let newLabels = [];
      for (let i = 1; i <= longestProgression; i++) {
        newLabels.push(i);
      }
      setLabels(newLabels);
    }
  }, [longestProgression, labels.length]);

  return (
    <>
      <h2>Progression</h2>
      <ProgressionChart data={chartData} unit={unit} />
    </>
  );
};

export default Progression;
