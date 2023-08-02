import React from "react";
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
