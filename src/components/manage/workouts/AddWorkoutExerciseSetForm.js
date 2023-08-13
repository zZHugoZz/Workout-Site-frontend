import React, { useState, useContext } from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import AddIcon from "@mui/icons-material/Add";

import useInterceptor from "../../../utils/useInterceptor";
import { WorkoutContext } from "../../../context/WorkoutContext";
import FormAddButton from "../../../utils/FormAddButton";

const AddWorkoutExerciseSetForm = () => {
  const { setExercises, exerciseId, exercises } = useContext(WorkoutContext);
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
      const response = await axiosInterceptor.post(
        "/workout_exercise_sets",
        formData
      );
      const updatedExercises = exercises.map((exercise) => {
        const updatedSets = [...exercise.sets, response.data];
        return { ...exercise, sets: updatedSets };
      });
      setExercises(updatedExercises);
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
        <FormAddButton isLoading={isLoading}>Add</FormAddButton>
      </Stack>
    </>
  );
};

export default AddWorkoutExerciseSetForm;
