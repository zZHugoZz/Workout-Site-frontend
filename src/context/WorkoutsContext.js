import React from "react";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useInterceptor from "../utils/useInterceptor";

export const WorkoutsContext = createContext();

export default function WorkoutsProvider({ children }) {
  const [currentWorkout, setCurrentWorkout] = useState({});
  const [workoutId, setWorkoutId] = useState(1);

  const axiosInterceptor = useInterceptor();
  const navigate = useNavigate();

  const handleAddWorkout = () => {
    axiosInterceptor.post("/workouts/").then((response) => {
      navigate(`/manage/workouts/${response.data.id}`);
    });
  };

  useEffect(() => {
    console.log("id: ", workoutId);
  }, [workoutId]);

  const contextData = {
    currentWorkout: currentWorkout,
    setCurrentWorkout: setCurrentWorkout,
    workoutId: workoutId,
    setWorkoutId: setWorkoutId,
    handleAddWorkout: handleAddWorkout,
  };

  return (
    <WorkoutsContext.Provider value={contextData}>
      {children}
    </WorkoutsContext.Provider>
  );
}
