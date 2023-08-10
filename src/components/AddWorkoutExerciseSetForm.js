import React, { useState, useContext } from "react";
import axios from "axios";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import AddIcon from "@mui/icons-material/Add";

import useInterceptor from "../utils/useInterceptor";
import { WorkoutContext } from "../context/WorkoutContext";

const AddWorkoutExerciseSetForm = () => {
  const { setExercises, exerciseId, workoutId } = useContext(WorkoutContext);
  const axiosInterceptor = useInterceptor();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    reps: "",
    weight: "",
    workout_exercise_id: exerciseId,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await axiosInterceptor.post("/workout_exercise_sets", formData);
      const response = await axios.get(`/workouts/${workoutId}`, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("authTokens")).access_token
          }`,
          "Content-Type": "application/json",
        },
      });
      console.log("data: ", response.data);
      setExercises(response.data.exercises);
      setFormData({
        reps: "",
        weight: "",
        workout_exercise_id: exerciseId,
      });
      setIsLoading(false);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Stack
        component="form"
        onSubmit={handleSubmit}
        paddingTop="10px"
        spacing={3}
      >
        <TextField
          variant="outlined"
          label="Reps"
          size="small"
          name="reps"
          color="success"
          value={formData.reps}
          onChange={handleChange}
          required
        />
        <TextField
          variant="outlined"
          label="Weight"
          name="weight"
          size="small"
          color="success"
          value={formData.weight}
          onChange={handleChange}
          required
        />
        <LoadingButton
          loading={isLoading}
          type="submit"
          loadingPosition="start"
          startIcon={<AddIcon />}
          variant="outlined"
          sx={{ width: "max-content" }}
          color="success"
        >
          Add
        </LoadingButton>
      </Stack>
    </>
  );
};

export default AddWorkoutExerciseSetForm;
