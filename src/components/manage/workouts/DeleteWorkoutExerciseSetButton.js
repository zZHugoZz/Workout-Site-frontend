import React, { useState, useContext } from "react";

import useInterceptor from "../../../utils/useInterceptor";
import { WorkoutContext } from "../../../context/WorkoutContext";
import DeleteTextButton from "../../../utils/DeleteTextButton";

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
      <DeleteTextButton
        isLoading={isLoading}
        onClick={() => handleDeleteWorkoutExerciseSet(setId)}
        size="small"
      />
    </>
  );
};

export default DeleteWorkoutExerciseSetButton;
