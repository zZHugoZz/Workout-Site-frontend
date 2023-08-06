import React from "react";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

import AddWorkout from "./AddWorkout";

const Workout = () => {
  return (
    <>
      <Stack alignItems="center">
        <Divider textAlign="center" sx={{ width: "100%" }}>
          <Typography variant="h6">Workout</Typography>
        </Divider>
        <Typography variant="body1">You didn't workout this day</Typography>
        <AddWorkout />
      </Stack>
    </>
  );
};

export default Workout;
