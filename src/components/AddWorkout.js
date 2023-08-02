import React from "react";
import { useNavigate } from "react-router-dom";
import useInterceptor from "../utils/useInterceptor";
import { SmallGreenButton } from "../styles/ButtonStyles";
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
      <SmallGreenButton onClick={handleAddWorkout} title="Add new workout">
        <StyledIconContainer>
          <AddIcon style={{ color: "white" }} />
        </StyledIconContainer>
      </SmallGreenButton>
    </>
  );
};

export default AddWorkout;
