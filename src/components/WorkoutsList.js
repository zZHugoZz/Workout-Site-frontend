import React, { useState, useEffect } from "react";
import useInterceptor from "../utils/useInterceptor";

const WorkoutsList = () => {
  const [workouts, setWorkouts] = useState([]);

  const axiosInterceptor = useInterceptor();

  const handleDelete = (id) => {
    axiosInterceptor.delete(`/workouts/${id}`).then((response) => {
      console.log("response: ", response);
    });
    axiosInterceptor.get("/workouts").then((response) => {
      setWorkouts(response.data);
    });
  };

  useEffect(() => {
    axiosInterceptor.get("/workouts").then((response) => {
      setWorkouts(response.data);
    });
  }, []);

  return (
    <>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>
            {workout.created_at}
            <button onClick={() => handleDelete(workout.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default WorkoutsList;
