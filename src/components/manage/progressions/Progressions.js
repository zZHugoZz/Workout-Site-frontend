import React, { useEffect, useContext } from "react";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

import ProgressionChart from "./ProgressionChart";
import ProgressionsList from "./ProgressionsList";
import AddProgression from "./AddProgression";
import CardTitle from "../../../utils/CardTitle";
import { ProgressionsContext } from "../../../context/ProgressionsContext";

const Progressions = ({ progressionsList }) => {
  const { setProgressions } = useContext(ProgressionsContext);

  useEffect(() => {
    setProgressions(progressionsList);
  }, [progressionsList]);

  return (
    <>
      <CardTitle>
        <Stack direction="row" alignItems="center">
          <Typography variant="h5">Progressions</Typography>
          <AddProgression />
        </Stack>
      </CardTitle>
      <Box sx={{ margin: "0 20px" }}>
        <ProgressionChart />
      </Box>
      <Divider sx={{ paddingTop: "20px" }} />
      {/* <ProgressionsList /> */}
    </>
  );
};

export default Progressions;
