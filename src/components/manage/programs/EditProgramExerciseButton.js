import React, { useState } from "react";

import EditTextButton from "../../../utils/EditTextButton";

const EditProgramExerciseButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <EditTextButton isLoading={isLoading} />
    </>
  );
};

export default EditProgramExerciseButton;
