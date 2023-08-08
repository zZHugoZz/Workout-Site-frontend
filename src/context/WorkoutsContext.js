import React from "react";
import { createContext, useState } from "react";

import useInterceptor from "../utils/useInterceptor";

export const WorkoutsContext = createContext();

export default function WorkoutsProvider({ children }) {
  const [currentWorkout, setCurrentWorkout] = useState({});
  const [workoutId, setWorkoutId] = useState(null);

  const axiosInterceptor = useInterceptor();

  const contextData = {
    currentWorkout: currentWorkout,
    setCurrentWorkout: setCurrentWorkout,
  };

  return (
    <WorkoutsContext.Provider value={contextData}>
      {children}
    </WorkoutsContext.Provider>
  );
}
