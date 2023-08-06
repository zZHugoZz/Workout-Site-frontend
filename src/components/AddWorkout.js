import React from "react";
import { useNavigate } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

import useInterceptor from "../utils/useInterceptor";

const AddWorkout = () => {
  const navigate = useNavigate();
  const axiosInterceptor = useInterceptor();

  const handleAddWorkout = () => {
    axiosInterceptor
      .post("/workouts/")
      .then((response) => {
        navigate(`workouts/${response.data.id}`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <IconButton
        onClick={handleAddWorkout}
        title="Add new workout"
        sx={{ width: "max-content" }}
      >
        <AddIcon sx={{ color: "green" }} />
      </IconButton>
    </>
  );
};

export default AddWorkout;
