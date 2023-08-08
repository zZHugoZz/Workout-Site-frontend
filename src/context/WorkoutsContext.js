import React from "react";
import { createContext, useState, useEffect } from "react";

import useInterceptor from "../utils/useInterceptor";

export const WorkoutsContext = createContext();

export default function WorkoutsProvider({ children }) {
  const [currentWorkout, setCurrentWorkout] = useState({});
  const [workoutId, setWorkoutId] = useState(1);

  const axiosInterceptor = useInterceptor();

  useEffect(() => {
    console.log("id: ", workoutId);
  }, [workoutId]);

  const contextData = {
    currentWorkout: currentWorkout,
    setCurrentWorkout: setCurrentWorkout,
    workoutId: workoutId,
    setWorkoutId: setWorkoutId,
  };

  return (
    <WorkoutsContext.Provider value={contextData}>
      {children}
    </WorkoutsContext.Provider>
  );
}
