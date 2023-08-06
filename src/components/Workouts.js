import React from "react";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

import AddWorkout from "./AddWorkout";
import WorkoutsList from "./WorkoutsList";

const Workouts = () => {
  return (
    <>
      <Divider textAlign="left">
        <Stack direction="row" alignItems="center">
          <Typography variant="h5">Workouts</Typography>
          <IconButton>
            <AddIcon sx={{ color: "green" }} />
          </IconButton>
        </Stack>
      </Divider>
      <AddWorkout />
      <WorkoutsList />
    </>
  );
};

export default Workouts;
