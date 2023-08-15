import React, { useState, useEffect, useContext } from "react";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

import ProgressionChart from "./ProgressionChart";
import ProgressionsList from "./ProgressionsList";
import AddProgression from "./AddProgression";
import CardTitle from "../../../utils/CardTitle";
import { ProgressionsContext } from "../../../context/ProgressionsContext";
import { UnitContext } from "../../../context/UnitContext";

const Progressions = ({ progressionsList }) => {
  const { setProgressions, progressions } = useContext(ProgressionsContext);
  const { unit } = useContext(UnitContext);

  const [datasets, setDatasets] = useState([]);
  const [longestProgression, setLongestProgression] = useState(0);
  const [labels, setLabels] = useState([
    "Session 1",
    "Session 2",
    "Session 3",
    "Session 4",
    "Session 5",
  ]);
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
        newLabels.push(`Session ${i}`);
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
      <Box sx={{ margin: "0 20px" }}>
        <ProgressionChart data={chartData} />
      </Box>
      <Divider sx={{ paddingTop: "20px" }} />
      {/* <ProgressionsList /> */}
    </>
  );
};

export default Progressions;
