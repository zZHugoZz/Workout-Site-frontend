import React, { useState, useEffect, useContext } from "react";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import ProgressionChart from "./ProgressionChart";
import ProgressionsList from "./ProgressionsList";
import AddProgression from "./AddProgression";
import CardTitle from "../../../utils/CardTitle";
import { ProgressionsContext } from "../../../context/ProgressionsContext";

const Progressions = ({ progressionsList }) => {
  const { setProgressions, progressions } = useContext(ProgressionsContext);

  const [datasets, setDatasets] = useState([]);
  const [longestProgression, setLongestProgression] = useState(0);
  const [labels, setLabels] = useState([1, 2, 3, 4, 5]);
  const [chartData, setChartData] = useState({
    labels: labels,
    datasets: datasets,
  });

  useEffect(() => {
    setProgressions(progressionsList);
  }, [progressionsList]);

  useEffect(() => {
    const lengths = progressions.map(
      (progression) => progression.performances.length
    );
    setLongestProgression(Math.max(...lengths));
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
  }, [datasets, labels]);

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
      {/* <ProgressionsList /> */}
      <ProgressionChart data={chartData} />
    </>
  );
};

export default Progressions;
