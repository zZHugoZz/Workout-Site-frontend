import React, { useContext } from "react";

import { ProgramsContext } from "../../../context/ProgramsContext";

const DeleteProgramButton = ({ programId }) => {
  const { handleDeleteProgram } = useContext(ProgramsContext);

  return (
    <>
      <IconButton
        onClick={() => handleDeleteProgram(programId)}
        variant="text"
        title="Delete program"
      >
        <DeleteForeverIcon fontSize="small" color="error" />
      </IconButton>
    </>
  );
};

export default DeleteProgramButton;
