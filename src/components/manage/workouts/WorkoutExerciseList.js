import React, { useState, useContext } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import CollapsibleRow from "./CollapsibleRow";
import AddWorkoutExerciseSetDialog from "./AddWorkoutExerciseSetDialog";
import { WorkoutContext } from "../../../context/WorkoutContext";

const WorkoutExerciseList = () => {
  const { exercises, setExerciseId } = useContext(WorkoutContext);

  const [isOpen, setIsOpen] = useState(false);

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
                sx={{
                  borderBottom: "1px solid #a3ab84",
                  backgroundColor: "#e2ebae",
                }}
                align="center"
                colSpan={12}
              >
                <Typography variant="h5">Exercises</Typography>
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
      <AddWorkoutExerciseSetDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default WorkoutExerciseList;
