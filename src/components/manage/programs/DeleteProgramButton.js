import React, { useContext, useState } from "react";

import { ProgramsContext } from "../../../context/ProgramsContext";
import useInterceptor from "../../../utils/useInterceptor";
import DeleteTextButton from "../../../utils/DeleteTextButton";

const DeleteProgramButton = ({ programId }) => {
  const { programs, setPrograms } = useContext(ProgramsContext);
  const axiosInterceptor = useInterceptor();

  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteProgram = async (id) => {
    try {
      setIsLoading(true);
      await axiosInterceptor.delete(`/programs/${id}`);
      const updatedPrograms = programs.filter((program) => program.id !== id);
      setPrograms(updatedPrograms);
      setIsLoading(false);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  return (
    <>
      <DeleteTextButton
        isLoading={isLoading}
        onClick={() => handleDeleteProgram(programId)}
      />
    </>
  );
};

export default DeleteProgramButton;
