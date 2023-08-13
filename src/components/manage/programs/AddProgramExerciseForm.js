import React, { useState, useContext } from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import useInterceptor from "../../../utils/useInterceptor";
import { ProgramContext } from "../../../context/ProgramContext";
import FormAddButton from "../../../utils/FormAddButton";

const AddProgramExerciseForm = ({ dayId }) => {
  const { setDays, days } = useContext(ProgramContext);

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    min_sets: "",
    max_sets: "",
    min_reps: "",
    max_reps: "",
    day_id: dayId,
  });

  const axiosInterceptor = useInterceptor();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axiosInterceptor.post(
        "/program_exercises",
        formData
      );
      const updatedDays = days.map((day) => {
        const updatedExercises = [...day.exercises, response.data];
        return { ...day, exercises: updatedExercises };
      });
      setDays(updatedDays);
      setFormData({
        name: "",
        min_sets: "",
        max_sets: "",
        min_reps: "",
        max_reps: "",
        day_id: dayId,
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
        witdth="300px"
        component="form"
        onSubmit={handleSubmit}
        paddingTop="10px"
        spacing={3}
      >
        <TextField
          variant="outlined"
          label="Name"
          name="name"
          size="small"
          color="success"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          variant="outlined"
          label="Min sets"
          name="min_sets"
          size="small"
          color="success"
          value={formData.min_sets}
          onChange={handleChange}
          type="number"
          InputProps={{
            inputProps: {
              min: 1,
            },
          }}
          required
        />
        <TextField
          variant="outlined"
          label="Max sets"
          name="max_sets"
          size="small"
          color="success"
          value={formData.max_sets}
          onChange={handleChange}
          type="number"
          InputProps={{
            inputProps: {
              min: 2,
            },
          }}
          required
        />
        <TextField
          variant="outlined"
          label="Min reps"
          name="min_reps"
          size="small"
          color="success"
          value={formData.min_reps}
          onChange={handleChange}
          type="number"
          InputProps={{
            inputProps: {
              min: 1,
            },
          }}
          required
        />
        <TextField
          variant="outlined"
          label="Max reps"
          name="max_reps"
          size="small"
          color="success"
          value={formData.max_reps}
          onChange={handleChange}
          type="number"
          InputProps={{
            inputProps: {
              min: 2,
            },
          }}
          required
        />
        <FormAddButton isLoading={isLoading}>Add</FormAddButton>
      </Stack>
    </>
  );
};

export default AddProgramExerciseForm;
