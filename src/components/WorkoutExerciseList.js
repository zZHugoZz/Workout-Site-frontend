import React from "react";

import AddIcon from "@mui/icons-material/Add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import Paper from "@mui/material/Paper";

import AddWorkoutExercise from "./AddWorkoutExercise";

const WorkoutExerciseList = ({ exercises, openDialog }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Exercise</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exercises.map((exercise) => (
              <TableRow>
                <TableCell>{exercise.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddWorkoutExercise />

      {/* <thead>
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
            <button
              onClick={openDialog}
              style={{ width: "100%", height: "35px", cursor: "pointer" }}
            >
              <AddIcon style={{ color: "#3DFF54" }} />
            </button>
          </td>
        </tr>
      </tfoot> */}
    </>
  );
};

export default WorkoutExerciseList;
