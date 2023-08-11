import React, { useState } from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import EditIcon from "@mui/icons-material/Edit";

const EditWorkoutExerciseButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <LoadingButton
        variant="text"
        color="inherit"
        startIcon={<EditIcon />}
        loading={isLoading}
        loadingPosition="start"
      >
        Edit
      </LoadingButton>
    </>
  );
};

export default EditWorkoutExerciseButton;
