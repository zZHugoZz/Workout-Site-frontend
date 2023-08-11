import React, { useContext, useState } from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { ProgramsContext } from "../../../context/ProgramsContext";
import useInterceptor from "../../../utils/useInterceptor";

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
      <LoadingButton
        onClick={() => handleDeleteProgram(programId)}
        variant="text"
        color="error"
        loading={isLoading}
        loadingPosition="start"
        startIcon={<DeleteForeverIcon />}
        title="Delete program"
      >
        <span>Delete</span>
      </LoadingButton>
    </>
  );
};

export default DeleteProgramButton;
