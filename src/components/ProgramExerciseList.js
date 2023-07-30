import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import { StyledIconContainer } from "../styles/IconStyles";
import { HoverButton } from "../styles/ButtonStyles";

const ProgramExerciseList = ({ day, handleDeleteExercise }) => {
  return (
    <>
      <ul>
        {day.exercises.map((exercise) => (
          <li key={exercise.id}>
            <p>{exercise.name}</p>
            <HoverButton onClick={() => handleDeleteExercise(exercise.id)}>
              <StyledIconContainer>
                <RemoveIcon style={{ color: "#E84444" }} />
              </StyledIconContainer>
            </HoverButton>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProgramExerciseList;
