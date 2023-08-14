import React, { useState, useContext } from "react";

import DeleteTextButton from "../../../utils/DeleteTextButton";
import useInterceptor from "../../../utils/useInterceptor";
import { ProgramContext } from "../../../context/ProgramContext";

const DeleteProgramDayButton = ({ dayId }) => {
  const { days, setDays } = useContext(ProgramContext);
  const axiosInterceptor = useInterceptor();

  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteDay = async (dayId) => {
    try {
      setIsLoading(true);
      await axiosInterceptor.delete(`/program_days/${dayId}`);
      const updatedDays = days.filter((day) => day.id !== dayId);
      setDays(updatedDays);
      setIsLoading(false);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  return (
    <>
      <DeleteTextButton
        isLoading={isLoading}
        onClick={() => handleDeleteDay(dayId)}
      />
    </>
  );
};

export default DeleteProgramDayButton;
