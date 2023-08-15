import React from "react";
import { useEffect, useContext } from "react";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import ProgressionChart from "./ProgressionChart";
import ProgressionsList from "./ProgressionsList";
import AddProgression from "./AddProgression";
import CardTitle from "../../../utils/CardTitle";
import { ProgressionsContext } from "../../../context/ProgressionsContext";

const Progressions = ({ progressionsList }) => {
  const { setProgressions, progressions } = useContext(ProgressionsContext);

  useEffect(() => {
    setProgressions(progressionsList);
  }, [progressionsList]);

  return (
    <>
      <CardTitle>
        <Stack direction="row" alignItems="center">
          <Typography variant="h5">Progressions</Typography>
          <AddProgression setProgressions={setProgressions} />
        </Stack>
      </CardTitle>
      {/* <ProgressionsList /> */}
      <ProgressionChart />
    </>
  );
};

export default Progressions;
