import styled from "styled-components";

const StyledWorkoutExerciseTable = styled.table`
  border-spacing: 0;
  border-collapse: separate;
  border-radius: 5px;
  border: 1px solid black;
  overflow: hidden;

  tr:nth-child(even) {
    background-color: red;
  }
`;

export { StyledWorkoutExerciseTable };
