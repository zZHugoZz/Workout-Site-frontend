import React from "react";
import { useNavigate } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";

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
      <button onClick={handleAddWorkout} title="Add new workout">
        <AddIcon style={{ color: "white" }} />
      </button>
    </>
  );
};

export default AddWorkout;
