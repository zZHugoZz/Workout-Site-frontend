import React, { useContext, useEffect } from "react";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import WorkoutsList from "./WorkoutsList";
import WorkoutsCalendar from "./WorkoutsCalendar";
import Workout from "./Workout";
import { WorkoutsContext } from "../context/WorkoutsContext";

const Workouts = ({ workoutsList }) => {
  const { setWorkouts } = useContext(WorkoutsContext);

  useEffect(() => {
    setWorkouts(workoutsList);
  }, [workoutsList]);

  return (
    <>
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
    </>
  );
};

export default Workouts;
