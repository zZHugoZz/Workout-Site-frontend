import React, { useState, useContext } from "react";
import axios from "axios";

import LoadingButton from "@mui/lab/LoadingButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import useInterceptor from "../../../utils/useInterceptor";
import { WorkoutContext } from "../../../context/WorkoutContext";

const DeleteWorkoutExerciseButton = ({ exerciseId }) => {
  const { setExercises, exercises } = useContext(WorkoutContext);
  const axiosInterceptor = useInterceptor();

  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteWorkoutExercise = async (id) => {
    try {
      setIsLoading(true);
      await axiosInterceptor.delete(`/workout_exercises/${id}`);
      const updatedExercises = exercises.filter(
        (exercise) => exercise.id !== id
      );
      setExercises(updatedExercises);
      setIsLoading(false);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  return (
    <>
      <LoadingButton
        variant="text"
        color="error"
        startIcon={<DeleteForeverIcon />}
        loading={isLoading}
        loadingPosition="start"
        onClick={() => handleDeleteWorkoutExercise(exerciseId)}
      >
        Delete
      </LoadingButton>
    </>
  );
};

export default DeleteWorkoutExerciseButton;
