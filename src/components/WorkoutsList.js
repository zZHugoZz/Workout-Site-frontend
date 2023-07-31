import React, { useState, useEffect } from "react";
import useInterceptor from "../utils/useInterceptor";
import { useNavigate } from "react-router-dom";

const WorkoutsList = () => {
  const [workouts, setWorkouts] = useState([]);

  const navigate = useNavigate();
  const axiosInterceptor = useInterceptor();

  const handleDelete = (id) => {
    axiosInterceptor.delete(`/workouts/${id}`);
    axiosInterceptor.get("/workouts").then((response) => {
      setWorkouts(response.data);
    });
  };

  const handleAccess = (id) => {
    navigate(`workouts/${id}`);
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
            {workout.date}
            <button onClick={() => handleDelete(workout.id)}>Delete</button>
            <button onClick={() => handleAccess(workout.id)}>Access</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default WorkoutsList;
