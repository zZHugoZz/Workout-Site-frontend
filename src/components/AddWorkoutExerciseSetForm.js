import React, { useState } from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddWorkoutExerciseSetForm = ({ id }) => {
  const [formData, setFormData] = useState({
    reps: "",
    weight: "",
    workout_exercise_id: id,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
          color="success"
          value={formData.reps}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          label="Weight"
          size="small"
          color="success"
          value={formData.weight}
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

export default AddWorkoutExerciseSetForm;
