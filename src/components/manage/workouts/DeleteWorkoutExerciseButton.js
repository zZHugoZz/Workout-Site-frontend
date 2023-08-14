import React, { useState, useContext } from "react";

import useInterceptor from "../../../utils/useInterceptor";
import { WorkoutContext } from "../../../context/WorkoutContext";
import DeleteTextButton from "../../../utils/DeleteTextButton";

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
      <DeleteTextButton
        isLoading={isLoading}
        onClick={() => handleDeleteWorkoutExercise(exerciseId)}
      />
    </>
  );
};

export default DeleteWorkoutExerciseButton;
