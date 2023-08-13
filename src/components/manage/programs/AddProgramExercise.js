import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

import AddProgramExerciseForm from "./AddProgramExerciseForm";
import CustomDialog from "../../../utils/CustomDialog";

const AddProgramExercise = ({ dayId }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        size="small"
        startIcon={<AddIcon />}
        color="success"
        onClick={() => setIsOpen(true)}
        sx={{ width: "max-content" }}
      >
        Add exercise
      </Button>
      <CustomDialog title="Add exercise" isOpen={isOpen} setIsOpen={setIsOpen}>
        <AddProgramExerciseForm dayId={dayId} />
      </CustomDialog>
    </>
  );
};

export default AddProgramExercise;
