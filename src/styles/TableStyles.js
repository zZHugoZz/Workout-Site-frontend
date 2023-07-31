import styled from "styled-components";

const StyledWorkoutExerciseTable = styled.table`
  border-spacing: 0;
  border-collapse: separate;
  border-radius: 5px;
  border: 1px solid #2a344a;
  overflow: hidden;
  text-align: center;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.5);

  th {
    background-color: black;
    border-bottom: 1px solid #2a344a;
  }

  tbody > tr:nth-child(odd) {
    background-color: #081018;
  }

  tbody > tr:nth-child(even) {
    background-color: #0b141e;
  }

  tbody > tr:last-child > td {
    border-bottom: 1px solid #2a344a;
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
  border: 1px solid #2a344a;
  overflow: hidden;
  text-align: center;

  th {
    background-color: black;
    border-bottom: 1px solid #2a344a;
  }

  tbody > tr:nth-child(odd) {
    background-color: #081018;
  }

  tbody > tr:nth-child(even) {
    background-color: #0b141e;
  }

  tbody > tr:last-child > td {
    border-bottom: 1px solid #2a344a;
  }

  th,
  td:not(:last-child) {
    padding: 5px 30px;
  }
`;

export { StyledWorkoutExerciseTable, StyledProgramExerciseTable };
