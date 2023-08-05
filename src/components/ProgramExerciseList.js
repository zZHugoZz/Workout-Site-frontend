import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddProgramExercise from "./AddProgramExercise";

const ProgramExerciseList = ({
  day,
  handleDeleteExercise,
  setDays,
  programId,
}) => {
  return (
    <>
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
              {exercise.name}
              <button onClick={() => handleDeleteExercise(exercise.id)}>
                <RemoveIcon style={{ color: "#E84444" }} />
              </button>
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
          <td colSpan={"3"}>
            <AddProgramExercise
              dayId={day.id}
              setDays={setDays}
              programId={programId}
            />
          </td>
        </tr>
      </tfoot>
    </>
  );
};

export default ProgramExerciseList;
