import React, { useContext } from "react";

import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import IconButton from "@mui/material/IconButton";

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
      <IconButton
        onClick={handleAddDay}
        sx={{ width: "max-content", height: "max-content" }}
      >
        <AddCircleOutlinedIcon htmlColor="green" fontSize="large" />
      </IconButton>
    </>
  );
};

export default AddDay;
