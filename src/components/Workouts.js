import React from "react";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";

import AddWorkout from "./AddWorkout";
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
        <Stack direction="row" alignItems="center">
          <Typography variant="h5">Workouts</Typography>
          <IconButton>
            <AddIcon sx={{ color: "green" }} />
          </IconButton>
        </Stack>
      </Divider>
      <Stack direction="row" spacing={2}>
        <WorkoutsCalendar />
        <Workout />
      </Stack>
      <AddWorkout />
      <WorkoutsList />
    </>
  );
};

export default Workouts;
