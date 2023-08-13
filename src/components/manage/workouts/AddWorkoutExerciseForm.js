import React, { useState, useContext } from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import AddIcon from "@mui/icons-material/Add";

import useInterceptor from "../../../utils/useInterceptor";
import { WorkoutContext } from "../../../context/WorkoutContext";
import FormAddButton from "../../../utils/FormAddButton";

const AddWorkoutExerciseForm = () => {
  const { workoutId, setExercises, exercises } = useContext(WorkoutContext);
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
      const response = await axiosInterceptor.post(
        "/workout_exercises",
        formData
      );
      setExercises([...exercises, response.data]);
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
        <FormAddButton isLoading={isLoading}>Add</FormAddButton>
      </Stack>
    </>
  );
};

export default AddWorkoutExerciseForm;
