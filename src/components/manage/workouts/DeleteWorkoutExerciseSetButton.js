import React, { useState, useContext } from "react";
import axios from "axios";

import LoadingButton from "@mui/lab/LoadingButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import useInterceptor from "../../../utils/useInterceptor";
import { WorkoutContext } from "../../../context/WorkoutContext";

const DeleteWorkoutExerciseSetButton = ({ setId }) => {
  const { workoutId, setExercises } = useContext(WorkoutContext);
  const axiosInterceptor = useInterceptor();

  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteWorkoutExerciseSet = async (id) => {
    try {
      setIsLoading(true);
      await axiosInterceptor.delete(`/workout_exercise_sets/${id}`);
      const response = await axios.get(`/workouts/${workoutId}`, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("authTokens")).access_token
          }`,
          "Content-Type": "application/json",
        },
      });
      setExercises(response.data.exercises);
      setIsLoading(false);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  return (
    <>
      <LoadingButton
        variant="outlined"
        size="small"
        loading={isLoading}
        startIcon={<DeleteForeverIcon />}
        loadingPosition="start"
        onClick={() => handleDeleteWorkoutExerciseSet(setId)}
      >
        delete
      </LoadingButton>
    </>
  );
};

export default DeleteWorkoutExerciseSetButton;
