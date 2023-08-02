import React from "react";
import useInterceptor from "../utils/useInterceptor";
import { GreenButton } from "../styles/ButtonStyles";
import { StyledIconContainer } from "../styles/IconStyles";
import AddIcon from "@mui/icons-material/Add";

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
      <GreenButton onClick={handleAddDay}>
        <StyledIconContainer>
          <AddIcon />
        </StyledIconContainer>
      </GreenButton>
    </>
  );
};

export default AddDay;
