import React, { useState } from "react";

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import CustomDialog from "../../../utils/CustomDialog";
import AddWorkoutExerciseForm from "./AddWorkoutExerciseForm";

const AddWorkoutExercise = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        color="success"
        onClick={() => setIsOpen(true)}
        sx={{ width: "max-content" }}
      >
        Add exercise
      </Button>
      <CustomDialog title="Add exercise" isOpen={isOpen} setIsOpen={setIsOpen}>
        <AddWorkoutExerciseForm />
      </CustomDialog>
    </>
  );
};

export default AddWorkoutExercise;
