import React, { useContext, useEffect } from "react";

import Stack from "@mui/material/Stack";

import WorkoutsList from "./WorkoutsList";
import WorkoutsCalendar from "./WorkoutsCalendar";
import Workout from "./Workout";
import { WorkoutsContext } from "../../../context/WorkoutsContext";
import CardTitle from "../../../utils/CardTitle";

const Workouts = ({ workoutsList, todaysWorkout }) => {
  const { setWorkouts, setTodaysWorkout } = useContext(WorkoutsContext);

  useEffect(() => {
    setWorkouts(workoutsList);
  }, [workoutsList]);

  useEffect(() => {
    setTodaysWorkout(todaysWorkout);
  });

  return (
    <>
      <CardTitle>Workouts</CardTitle>
      <Stack direction="row" justifyContent="space-evenly">
        <WorkoutsCalendar />
        <Workout />
      </Stack>
      <WorkoutsList />
    </>
  );
};

export default Workouts;
