import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import { StyledIconContainer } from "../styles/IconStyles";
import { HoverButton } from "../styles/ButtonStyles";
import { StyledProgramExerciseTable } from "../styles/TableStyles";

const ProgramExerciseList = ({ day, handleDeleteExercise }) => {
  return (
    <>
      <StyledProgramExerciseTable>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Set range</th>
            <th>Rep range</th>
          </tr>
        </thead>
        <tbody>
          {day.exercises.map((exercise) => (
            <tr key={exercise.id}>
              <td>
                {exercise.name}-
                <HoverButton onClick={() => handleDeleteExercise(exercise.id)}>
                  <StyledIconContainer>
                    <RemoveIcon style={{ color: "#E84444" }} />
                  </StyledIconContainer>
                </HoverButton>
              </td>
              <td>
                {exercise.min_sets}-{exercise.max_sets}
              </td>
              <td>
                {exercise.min_reps}-{exercise.max_reps}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={"3"}></td>
          </tr>
        </tfoot>
      </StyledProgramExerciseTable>
    </>
  );
};

export default ProgramExerciseList;
