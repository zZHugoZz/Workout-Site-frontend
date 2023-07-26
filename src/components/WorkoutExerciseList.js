import React from "react";

const WorkoutExerciseList = ({ exercises }) => {
  return (
    <>
      <table>
        <tr>
          <th>Exercise</th>
          <th>Sets</th>
          <th>Reps</th>
          <th>Weight</th>
          <th>Unit</th>
        </tr>
        {exercises.map((exercise) => (
          <tr key={exercise.id}>
            <th>{exercise.name}</th>
            <th>{exercise.sets}</th>
            <th>{exercise.reps}</th>
            <th>{exercise.weight}</th>
            <th>{exercise.unit}</th>
          </tr>
        ))}
      </table>
    </>
  );
};

export default WorkoutExerciseList;
