import React from "react";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useInterceptor from "../utils/useInterceptor";

export const WorkoutsContext = createContext();

export default function WorkoutsProvider({ children }) {
  const [currentWorkout, setCurrentWorkout] = useState({});
  const [workouts, setWorkouts] = useState([]);
  const [workoutId, setWorkoutId] = useState(1);

  const axiosInterceptor = useInterceptor();
  const navigate = useNavigate();

  const getWorkouts = async () => {
    try {
      const response = await axiosInterceptor.get("/workouts");
      return response.data;
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleAddWorkout = async () => {
    try {
      const response = await axiosInterceptor.post("/workouts/");
      navigate(`/manage/workouts/${response.data.id}`);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosInterceptor.delete(`/workouts/${id}`);
      const response = await axiosInterceptor.get("/workouts");
      setWorkouts(response.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    console.log("workouts: ", workouts);
  }, [workouts]);

  const contextData = {
    currentWorkout: currentWorkout,
    setCurrentWorkout: setCurrentWorkout,
    workouts: workouts,
    setWorkouts: setWorkouts,
    workoutId: workoutId,
    setWorkoutId: setWorkoutId,
    handleAddWorkout: handleAddWorkout,
    handleDelete: handleDelete,
    getWorkouts: getWorkouts,
  };

  return (
    <WorkoutsContext.Provider value={contextData}>
      {children}
    </WorkoutsContext.Provider>
  );
}
