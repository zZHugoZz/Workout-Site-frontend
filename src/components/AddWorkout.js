import React from "react";
import { useNavigate } from "react-router-dom";
import useInterceptor from "../utils/useInterceptor";
import { HoverButton } from "../styles/ButtonStyles";
import { StyledIconContainer } from "../styles/IconStyles";
import AddIcon from "@mui/icons-material/Add";

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
      <HoverButton onClick={handleAddWorkout}>
        <StyledIconContainer>
          <AddIcon style={{ color: "#3DFF54" }} />
        </StyledIconContainer>
      </HoverButton>
    </>
  );
};

export default AddWorkout;
