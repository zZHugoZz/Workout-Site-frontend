import React, { useState } from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddWorkoutExerciseForm = () => {
  const [formData, setFormData] = useState({
    name: "",
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
