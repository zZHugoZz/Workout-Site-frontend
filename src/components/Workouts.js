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
      <WorkoutsProvider>
        <Divider
          textAlign="left"
          sx={{ marginTop: "10px", marginBottom: "15px" }}
        >
          <Typography variant="h5">Workouts</Typography>
        </Divider>
        <Stack direction="row" justifyContent="space-evenly">
          <WorkoutsCalendar />
          <Workout />
        </Stack>
        <WorkoutsList />
      </WorkoutsProvider>
    </>
  );
};

export default Workouts;
