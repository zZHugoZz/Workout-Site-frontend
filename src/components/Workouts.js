import React from "react";
import AddWorkout from "./AddWorkout";
import WorkoutsList from "./WorkoutsList";
import { DarkLine } from "../styles/LineStyles";
import WorkoutsCalendar from "./WorkoutsCalendar";

const Workouts = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
          paddingBottom: "20px",
        }}
      >
        <h2>Workouts</h2>
        <AddWorkout />
      </div>
      <DarkLine style={{ marginBottom: "20px" }} />
      <WorkoutsList />
    </>
  );
};

export default Workouts;
