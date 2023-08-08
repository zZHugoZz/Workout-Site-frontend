import React, { useState } from "react";

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import AddWorkoutExerciseDialog from "./AddWorkoutExerciseDialog";

const AddWorkoutExercise = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        color="success"
        onClick={() => setIsOpen(true)}
      >
        Add exercise
      </Button>
      <AddWorkoutExerciseDialog open={isOpen} setIsOpen={setIsOpen} id={id} />
    </>
  );
};

export default AddWorkoutExercise;
