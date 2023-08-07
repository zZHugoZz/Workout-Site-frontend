import React from "react";
import { useNavigate } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

import useInterceptor from "../utils/useInterceptor";

const AddProgram = () => {
  const navigate = useNavigate();
  const axiosInterceptor = useInterceptor();

  const handleAddProgram = () => {
    axiosInterceptor.post("/programs").then((response) => {
      for (let i = 1; i <= 7; i++) {
        axiosInterceptor.post("/program_days", {
          program_id: response.data.id,
        });
      }
      navigate(`programs/${response.data.id}`);
    });
  };

  return (
    <>
      <IconButton onClick={handleAddProgram} sx title="Create new program">
        <AddIcon sx={{ color: "green" }} />
      </IconButton>
    </>
  );
};

export default AddProgram;
