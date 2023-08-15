import React from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import useInterceptor from "../utils/useInterceptor";

export const WorkoutsContext = createContext();

export default function WorkoutsProvider({ children }) {
  const axiosInterceptor = useInterceptor();

  const [workouts, setWorkouts] = useState([]);

  const handleDelete = async (id) => {
    try {
      await axiosInterceptor.delete(`/workouts/${id}`);
      const updatedWorkouts = workouts.filter((workout) => workout.id !== id);
      setWorkouts(updatedWorkouts);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const contextData = {
    workouts: workouts,
    setWorkouts: setWorkouts,
    handleDelete: handleDelete,
  };

  return (
    <WorkoutsContext.Provider value={contextData}>
      {children}
    </WorkoutsContext.Provider>
  );
}
