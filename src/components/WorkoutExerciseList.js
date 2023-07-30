import React from "react";
import { StyledWorkoutExerciseTable } from "../styles/TableStyles";

const WorkoutExerciseList = ({ exercises, openDialog }) => {
  return (
    <>
      <StyledWorkoutExerciseTable>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Weight</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise) => (
            <tr key={exercise.id}>
              <td>{exercise.name}</td>
              <td>{exercise.sets}</td>
              <td>{exercise.reps}</td>
              <td>{exercise.weight}</td>
              <td>{exercise.unit}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={"5"}>
              <button onClick={openDialog}>+</button>
            </td>
          </tr>
        </tfoot>
      </StyledWorkoutExerciseTable>
    </>
  );
};

export default WorkoutExerciseList;
