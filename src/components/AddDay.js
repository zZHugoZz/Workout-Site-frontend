import React from "react";
import useInterceptor from "../utils/useInterceptor";

const AddDay = ({ id, setDays }) => {
  const axiosInterceptor = useInterceptor();

  const handleAddDay = async () => {
    await axiosInterceptor.post("/program_days", {
      program_id: id,
    });
    axiosInterceptor.get(`/programs/${id}`).then((response) => {
      setDays(response.data.days);
    });
  };

  return (
    <>
      <button onClick={handleAddDay}>Add day</button>
    </>
  );
};

export default AddDay;
