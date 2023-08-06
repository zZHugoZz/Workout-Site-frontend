import React from "react";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import WorkoutsList from "./WorkoutsList";
import WorkoutsCalendar from "./WorkoutsCalendar";
import Workout from "./Workout";

const Workouts = () => {
  return (
    <>
      <Divider
        textAlign="left"
        sx={{ marginTop: "10px", marginBottom: "10px" }}
      >
        <Typography variant="h5">Workouts</Typography>
      </Divider>
      <Stack direction="row" spacing={2}>
        <WorkoutsCalendar />
        <Workout />
      </Stack>
      <WorkoutsList />
    </>
  );
};

export default Workouts;
