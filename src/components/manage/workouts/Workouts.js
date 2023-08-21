import React, { useContext, useEffect } from "react";

import Stack from "@mui/material/Stack";

import WorkoutsCalendar from "./WorkoutsCalendar";
import Workout from "./Workout";
import { WorkoutsContext } from "../../../context/WorkoutsContext";
import CardTitle from "../../../utils/CardTitle";

const Workouts = ({ todaysWorkout }) => {
  const { setTodaysWorkout } = useContext(WorkoutsContext);

  useEffect(() => {
    setTodaysWorkout(todaysWorkout);
  }, [todaysWorkout]);

  return (
    <>
      <CardTitle>Workouts</CardTitle>
      <Stack direction="row" justifyContent="space-evenly">
        <WorkoutsCalendar />
        <Workout />
      </Stack>
    </>
  );
};

export default Workouts;
