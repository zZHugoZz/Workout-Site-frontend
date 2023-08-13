import React, { useContext } from "react";

import RemoveIcon from "@mui/icons-material/Remove";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import AddProgramExercise from "./AddProgramExercise";

const ProgramExerciseList = ({ day, handleDeleteExercise }) => {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Exercise</TableCell>
            <TableCell>Set range</TableCell>
            <TableCell>Rep range</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {day.exercises.map((exercise) => (
            <TableRow key={exercise.id}>
              <TableCell>
                {exercise.name}
                <button onClick={() => handleDeleteExercise(exercise.id)}>
                  <RemoveIcon style={{ color: "#E84444" }} />
                </button>
              </TableCell>
              <TableCell>
                {exercise.min_sets}-{exercise.max_sets}
              </TableCell>
              <TableCell>
                {exercise.min_reps}-{exercise.max_reps}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AddProgramExercise dayId={day.id} />
    </>
  );
};

export default ProgramExerciseList;
