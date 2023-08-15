import React from "react";
import { useState, useEffect } from "react";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import useInterceptor from "../../../utils/useInterceptor";
import ProgressionChart from "./ProgressionChart";
import ProgressionsList from "./ProgressionsList";
import AddProgression from "./AddProgression";
import CardTitle from "../../../utils/CardTitle";

const Progression = ({ progressionsList }) => {
  const [progressions, setProgressions] = useState([]);
  const [datasets, setDatasets] = useState([]);
  const [longestProgression, setLongestProgression] = useState(0);
  const [labels, setLabels] = useState([1, 2, 3, 4, 5]);
  const [chartData, setChartData] = useState({
    labels: labels,
    datasets: datasets,
  });

  const axiosInterceptor = useInterceptor();

  useEffect(() => {
    axiosInterceptor.get("/progressions").then((response) => {
      const lengths = response.data.map(
        (progression) => progression.performances.length
      );
      setProgressions(response.data);
      setLongestProgression(Math.max(...lengths));
    });
  }, []);

  useEffect(() => {
    setDatasets(
      progressions.map((progression) => ({
        label: progression.name,
        data: progression.performances.map((performance) => performance.weight),
        borderColor: progression.color,
        backgroundColor: progression.color,
        color: "#AFC0CF",
      }))
    );
  }, [progressions]);

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
      <CardTitle>
        <Stack direction="row" alignItems="center">
          <Typography variant="h5">Progressions</Typography>
          <AddProgression setProgressions={setProgressions} />
        </Stack>
      </CardTitle>
      <ProgressionsList
        progressions={progressions}
        setProgressions={setProgressions}
      />
      <ProgressionChart data={chartData} />
    </>
  );
};

export default Progression;
