import React from "react";
import AddWorkout from "./AddWorkout";
import WorkoutsList from "./WorkoutsList";

const Workouts = () => {
  return (
    <>
      <h2>Workouts</h2>
      <AddWorkout />
      <WorkoutsList />
    </>
  );
};

export default Workouts;
