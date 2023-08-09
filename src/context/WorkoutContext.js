import React from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import useInterceptor from "../utils/useInterceptor";

export const WorkoutContext = createContext();

export default function WorkoutProvider({ children }) {
  const axiosInterceptor = useInterceptor();
  const navigate = useNavigate();

  const [currentWorkout, setCurrentWorkout] = useState({});
  const [workoutId, setWorkoutId] = useState(0);
  const [exercises, setExercises] = useState([]);
  const [exerciseId, setExerciseId] = useState(null);
  const [currentExercise, setCurrentExercise] = useState({});

  const handleAddWorkout = async () => {
    try {
      const response = await axiosInterceptor.post("/workouts/");
      navigate(`/manage/workouts/${response.data.id}`);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  const contextData = {
    currentWorkout: currentWorkout,
    setCurrentWorkout: setCurrentWorkout,
    workoutId: workoutId,
    setWorkoutId: setWorkoutId,
    handleAddWorkout: handleAddWorkout,
    exercises: exercises,
    setExercises: setExercises,
    exerciseId: exerciseId,
    setExerciseId: setExerciseId,
    currentExercise: currentExercise,
    setCurrentExercise: setCurrentExercise,
  };

  return (
    <WorkoutContext.Provider value={contextData}>
      {children}
    </WorkoutContext.Provider>
  );
}
