import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import AddWorkoutExercise from "./AddWorkoutExercise";

const WorkoutExerciseList = ({ exercises, id }) => {
  return (
    <>
      <TableContainer component={Paper} sx={{ backgroundColor: "#f5eeda" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ borderBottom: "1px solid #a3ab84" }}
                align="center"
              >
                Exercise
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exercises?.map((exercise) => (
              <TableRow
                key={exercise.id}
                sx={{
                  "&:not(:last-child) > .css-1ex1afd-MuiTableCell-root": {
                    borderBottom: "1px solid #a3ab84",
                  },
                }}
              >
                <TableCell>{exercise.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddWorkoutExercise id={id} />
    </>
  );
};

export default WorkoutExerciseList;
