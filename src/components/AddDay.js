import React from "react";

import AddIcon from "@mui/icons-material/Add";

import useInterceptor from "../utils/useInterceptor";

const AddDay = ({ id, setDays }) => {
  const axiosInterceptor = useInterceptor();

  const handleAddDay = async () => {
    await axiosInterceptor
      .post("/program_days", {
        program_id: id,
      })
      .then((response) => {
        console.log("data: ", response.data.id);
        let article = document.getElementById(`#article-${response.data.id}`);
        console.log("article: ", article);
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
