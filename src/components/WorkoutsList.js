import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import RemoveIcon from "@mui/icons-material/Remove";

import useInterceptor from "../utils/useInterceptor";
import { WorkoutsContext } from "../context/WorkoutsContext";

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
            <button onClick={() => handleAccess(workout.id)}>
              {workout.date}
            </button>
            <button onClick={() => handleDelete(workout.id)}>
              <RemoveIcon style={{ color: "#E84444" }} />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default WorkoutsList;
