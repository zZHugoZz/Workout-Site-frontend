import React, { useState } from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const AddWorkoutExerciseSetForm = ({ id }) => {
  const [formData, setFormData] = useState({
    reps: "",
    weight: "",
    workout_exercise_id: id,
  });

  const handleSubmit = (e) => {
    e.preventDefault;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Stack
        direction="row"
        component="form"
        onSubmit={handleSubmit}
        spacing={1}
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
      </Stack>
    </>
  );
};

export default AddWorkoutExerciseSetForm;
