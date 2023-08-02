import React from "react";
import AddWorkout from "./AddWorkout";
import WorkoutsList from "./WorkoutsList";
import { DarkLine } from "../styles/LineStyles";

const Workouts = () => {
  return (
    <>
      <h2>Workouts</h2>
      <DarkLine style={{ marginBottom: "20px" }} />
      <AddWorkout />
      <WorkoutsList />
    </>
  );
};

export default Workouts;
