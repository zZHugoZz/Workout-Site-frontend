import React, { useContext } from "react";

import AddIcon from "@mui/icons-material/Add";

import useInterceptor from "../../../utils/useInterceptor";
import { ProgramContext } from "../../../context/ProgramContext";

const AddDay = () => {
  const { setDays, days, programId } = useContext(ProgramContext);
  const axiosInterceptor = useInterceptor();

  const handleAddDay = async () => {
    try {
      const response = await axiosInterceptor.post("/program_days", {
        program_id: programId,
      });
      setDays([...days, response.data]);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  return (
    <>
      <button onClick={handleAddDay}>
        <AddIcon />
      </button>
    </>
  );
};

export default AddDay;
