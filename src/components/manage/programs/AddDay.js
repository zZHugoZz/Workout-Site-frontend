import React from "react";

import AddIcon from "@mui/icons-material/Add";

import useInterceptor from "../../../utils/useInterceptor";

const AddDay = ({ id, setDays }) => {
  const axiosInterceptor = useInterceptor();

  const handleAddDay = async () => {
    await axiosInterceptor.post("/program_days", {
      program_id: id,
    });
    await axiosInterceptor.get(`/programs/${id}`).then((response) => {
      setDays(response.data.days);
    });
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
