import React from "react";

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const AddWorkoutExercise = () => {
  return (
    <>
      <Button variant="contained" startIcon={<AddIcon />} color="success">
        Add exercise
      </Button>
    </>
  );
};

export default AddWorkoutExercise;
