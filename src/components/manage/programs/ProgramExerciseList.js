import React, { useContext } from "react";

import RemoveIcon from "@mui/icons-material/Remove";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Stack from "@mui/material/Stack";

import AddProgramExercise from "./AddProgramExercise";

const ProgramExerciseList = ({ day, handleDeleteExercise }) => {
  return (
    <>
      <Stack alignItems="center" spacing={2} padding={2}>
        <TableContainer sx={{ maxWidth: "500px", padding: "0 20px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Exercise</TableCell>
                <TableCell align="center">Set range</TableCell>
                <TableCell align="center">Rep range</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {day.exercises?.map((exercise) => (
                <TableRow key={exercise.id}>
                  <TableCell align="center">
                    {exercise.name}
                    <button onClick={() => handleDeleteExercise(exercise.id)}>
                      <RemoveIcon style={{ color: "#E84444" }} />
                    </button>
                  </TableCell>
                  <TableCell align="center">
                    {exercise.min_sets}-{exercise.max_sets}
                  </TableCell>
                  <TableCell align="center">
                    {exercise.min_reps}-{exercise.max_reps}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <AddProgramExercise dayId={day.id} />
      </Stack>
    </>
  );
};

export default ProgramExerciseList;
