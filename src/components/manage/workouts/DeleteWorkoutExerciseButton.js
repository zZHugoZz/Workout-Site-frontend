import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import LoadingButton from "@mui/lab/LoadingButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import useInterceptor from "../../../utils/useInterceptor";
import { WorkoutContext } from "../../../context/WorkoutContext";

const DeleteWorkoutExerciseButton = ({ exerciseId }) => {
  const { workoutId, setExercises } = useContext(WorkoutContext);
  const axiosInterceptor = useInterceptor();

  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteWorkoutExercise = async (id) => {
    try {
      setIsLoading(true);
      await axiosInterceptor.delete(`/workout_exercises/${id}`);
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

  useEffect(() => {
    console.log("loading: ", isLoading);
  }, [isLoading]);

  return (
    <>
      <LoadingButton
        variant="outlined"
        size="small"
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
