import React, { useState, useContext } from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import AddIcon from "@mui/icons-material/Add";

import useInterceptor from "../utils/useInterceptor";
import { WorkoutContext } from "../context/WorkoutContext";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const AddWorkoutExerciseForm = () => {
  const { workoutId, setCurrentWorkout } = useContext(WorkoutContext);
  const { authTokens } = useContext(AuthContext);
  const axiosInterceptor = useInterceptor();

  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    n_sets: 1,
    workout_id: workoutId,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await axiosInterceptor.post("/workout_exercises", formData);
      const response = await axios.get(`/workouts/${workoutId}`, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("authTokens")).access_token
          }`,
          "Content-Type": "application/json",
        },
      });
      setCurrentWorkout(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Stack
        width="300px"
        component="form"
        onSubmit={handleSubmit}
        paddingTop="10px"
        spacing={3}
      >
        <TextField
          variant="outlined"
          label="Name"
          size="small"
          color="success"
          name="name"
          value={formData.name}
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

export default AddWorkoutExerciseForm;
