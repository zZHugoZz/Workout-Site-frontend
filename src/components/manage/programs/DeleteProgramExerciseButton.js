import React, { useState, useContext } from "react";

import DeleteTextButton from "../../../utils/DeleteTextButton";

import useInterceptor from "../../../utils/useInterceptor";
import { ProgramContext } from "../../../context/ProgramContext";

const DeleteProgramExerciseButton = ({ exerciseId }) => {
  const { days, setDays } = useContext(ProgramContext);
  const axiosInterceptor = useInterceptor();

  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteExercise = async (exerciseId) => {
    try {
      await axiosInterceptor.delete(`/program_exercises/${exerciseId}`);
      const updatedDays = days.map((day) => {
        const updatedExercises = day.exercises.filter(
          (exercise) => exercise.id !== exerciseId
        );
        return { ...day, exercises: updatedExercises };
      });
      setDays(updatedDays);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  return (
    <>
      <DeleteTextButton
        isLoading={isLoading}
        onClick={() => handleDeleteExercise(exerciseId)}
      />
    </>
  );
};

export default DeleteProgramExerciseButton;
