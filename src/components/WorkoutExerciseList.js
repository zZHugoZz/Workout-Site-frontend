import React, { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import AddWorkoutExercise from "./AddWorkoutExercise";
import CollapsibleRow from "./CollapsibleRow";
import useInterceptor from "../utils/useInterceptor";
import AddWorkoutExerciseSetDialog from "./AddWorkoutExerciseSetDialog";

const WorkoutExerciseList = ({ exercises }) => {
  const axiosInterceptor = useInterceptor();

  const [isOpen, setIsOpen] = useState(false);
  const [exerciseId, setExerciseId] = useState(null);

  const handleAddWorkoutExercise = (id) => {
    setIsOpen(true);
    setExerciseId(id);
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "#f5eeda",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ borderBottom: "1px solid #a3ab84" }}
                align="center"
                colSpan={12}
              >
                Exercises
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exercises?.map((exercise) => (
              <CollapsibleRow
                key={exercise.id}
                row={exercise}
                handleAddWorkoutExercise={handleAddWorkoutExercise}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddWorkoutExerciseSetDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        id={exerciseId}
      />
      <AddWorkoutExercise />
    </>
  );
};

export default WorkoutExerciseList;
