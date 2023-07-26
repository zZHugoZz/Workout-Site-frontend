import React, { useState, useEffect } from "react";
import useInterceptor from "../utils/useInterceptor";

const WorkoutsList = () => {
  const [workouts, setWorkouts] = useState([]);

  const axiosInterceptor = useInterceptor();

  useEffect(() => {
    axiosInterceptor.get("/workouts").then((response) => {
      setWorkouts(response.data);
    });
  });

  return (
    <>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>{workout.created_at}</li>
        ))}
      </ul>
    </>
  );
};

export default WorkoutsList;
