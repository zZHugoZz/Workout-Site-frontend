import React from "react";
import { useNavigate } from "react-router-dom";
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
      <button onClick={handleAddWorkout}>Add workout</button>
    </>
  );
};

export default AddWorkout;
