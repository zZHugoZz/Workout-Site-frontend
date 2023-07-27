import React from "react";
import useInterceptor from "../utils/useInterceptor";

const AddDay = ({ id }) => {
  const axiosInterceptor = useInterceptor();

  const handleAddDay = () => {
    axiosInterceptor.post("/program_days", {
      program_id: id,
    });
  };

  return (
    <>
      <button onClick={handleAddDay}>Add day</button>
    </>
  );
};

export default AddDay;
