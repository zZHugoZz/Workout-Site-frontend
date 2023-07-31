import styled from "styled-components";

const StyledWorkoutExerciseTable = styled.table`
  border-spacing: 0;
  border-collapse: separate;
  border-radius: 5px;
  border: 1px solid #2a344a;
  overflow: hidden;
  text-align: center;

  th {
    background-color: black;
    border-bottom: 1px solid #2a344a;
  }

  tbody > tr:nth-child(odd) {
    background-color: #02080d;
  }

  tbody > tr:nth-child(even) {
    background-color: #060c13;
  }

  th,
  td:not(:last-child) {
    padding: 15px 60px;
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
    padding: 5px 30px;
  }
`;

export { StyledWorkoutExerciseTable, StyledProgramExerciseTable };
