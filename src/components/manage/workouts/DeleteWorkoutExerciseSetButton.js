import React, { useState, useContext } from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import useInterceptor from "../../../utils/useInterceptor";
import { WorkoutContext } from "../../../context/WorkoutContext";

const DeleteWorkoutExerciseSetButton = ({ setId }) => {
  const { setExercises, exercises } = useContext(WorkoutContext);
  const axiosInterceptor = useInterceptor();

  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteWorkoutExerciseSet = async (id) => {
    try {
      setIsLoading(true);
      await axiosInterceptor.delete(`/workout_exercise_sets/${id}`);
      const updatedExercises = exercises.map((exercise) => {
        const updatedSets = exercise.sets.filter((set) => set.id !== setId);
        return { ...exercise, sets: updatedSets };
      });
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
        size="small"
        loading={isLoading}
        startIcon={<DeleteForeverIcon />}
        loadingPosition="start"
        color="error"
        onClick={() => handleDeleteWorkoutExerciseSet(setId)}
      >
        delete
      </LoadingButton>
    </>
  );
};

export default DeleteWorkoutExerciseSetButton;
