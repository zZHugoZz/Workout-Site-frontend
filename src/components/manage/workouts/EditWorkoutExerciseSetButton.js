import React, { useState } from "react";

import EditTextButton from "../../../utils/EditTextButton";

const EditWorkoutExerciseSetButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <EditTextButton isLoading={isLoading} size="small" />
    </>
  );
};

export default EditWorkoutExerciseSetButton;
