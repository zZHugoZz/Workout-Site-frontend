import React, { useState, useContext } from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import useInterceptor from "../utils/useInterceptor";
import { WorkoutsContext } from "../context/WorkoutsContext";

const AddWorkoutExerciseForm = () => {
  const { workoutId, setCurrentWorkout } = useContext(WorkoutsContext);
  const axiosInterceptor = useInterceptor();

  const [formData, setFormData] = useState({
    name: "",
    n_sets: 1,
    workout_id: workoutId,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInterceptor.post("/workout_exercises", formData);
      const response = await axiosInterceptor.get(`/workouts/${workoutId}`);
      setCurrentWorkout(response.data);
      setFormData({
        name: "",
        n_sets: 1,
        workout_id: workoutId,
      });
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
        />
        <Button
          variant="outlined"
          type="submit"
          color="success"
          sx={{ width: "max-content" }}
        >
          Add
        </Button>
      </Stack>
    </>
  );
};

export default AddWorkoutExerciseForm;
