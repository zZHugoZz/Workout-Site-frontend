import styled from "styled-components";

const StyledWorkoutExerciseTable = styled.table`
  border-spacing: 0;
  border-collapse: separate;
  border-radius: 5px;
  border: 1px solid black;
  overflow: hidden;
  text-align: center;

  tr:nth-child(even) {
    background-color: red;
  }

  th,
  td:not(:last-child) {
    padding: 10px 30px;
  }
`;

const StyledProgramExerciseTable = styled.table`
  border-spacing: 0;
  border-collapse: separate;
  border-radius: 5px;
  border: 1px solid black;
  overflow: hidden;
  text-align: center;

  th,
  td:not(:last-child) {
    padding: 10px 30px;
  }
`;

export { StyledWorkoutExerciseTable, StyledProgramExerciseTable };
