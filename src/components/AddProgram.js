import React from "react";
import { useNavigate } from "react-router-dom";
import useInterceptor from "../utils/useInterceptor";
import { SmallGreenButton } from "../styles/ButtonStyles";
import { StyledIconContainer } from "../styles/IconStyles";
import AddIcon from "@mui/icons-material/Add";

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
      <SmallGreenButton onClick={handleAddProgram} title="Create new program">
        <StyledIconContainer>
          <AddIcon style={{ color: "white" }} />
        </StyledIconContainer>
      </SmallGreenButton>
    </>
  );
};

export default AddProgram;
