import React from "react";
import { useNavigate } from "react-router-dom";
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
      <button onClick={handleAddProgram}>Add program</button>
    </>
  );
};

export default AddProgram;
