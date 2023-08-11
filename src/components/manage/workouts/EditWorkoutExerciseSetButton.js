import React from "react";

import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

const EditWorkoutExerciseSetButton = () => {
  return (
    <>
      <Button
        variant="text"
        startIcon={<EditIcon />}
        color="inherit"
        size="small"
      >
        Edit
      </Button>
    </>
  );
};

export default EditWorkoutExerciseSetButton;
