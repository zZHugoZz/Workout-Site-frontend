import React from "react";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useInterceptor from "../utils/useInterceptor";

export const WorkoutContext = createContext();

export default WorkoutProvider = ({ children }) => {
  const axiosInterceptor = useInterceptor();
  const navigate = useNavigate();

  const [currentWorkout, setCurrentWorkout] = useState({});
  const [workoutId, setWorkoutId] = useState(0);

  const handleAddWorkout = async () => {
    try {
      const response = await axiosInterceptor.post("/workouts/");
      navigate(`/manage/workouts/${response.data.id}`);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const contextData = {
    currentWorkout,
    currentWorkout,
    setCurrentWorkout,
    setCurrentWorkout,
    workoutId,
    setWorkoutId,
    handleAddWorkout: handleAddWorkout,
  };

  return (
    <WorkoutContext.Provider value={contextData}>
      {children}
    </WorkoutContext.Provider>
  );
};
