import React from "react";

import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

import AddProgramExercise from "./AddProgramExercise";
import CustomMenu from "../../../utils/CustomMenu";
import DeleteProgramExerciseButton from "./DeleteProgramExerciseButton";
import EditProgramExerciseButton from "./EditProgramExerciseButton";
import Typography from "@mui/material/Typography";

const ProgramExerciseList = ({ day }) => {
  return (
    <>
      <Stack alignItems="start" spacing={2} sx={{ paddingLeft: "20px" }}>
        <Paper
          component={Stack}
          alignItems="center"
          spacing={1}
          padding={1}
          sx={{ backgroundColor: "#f9ffdf" }}
        >
          <TableContainer
            sx={{
              maxWidth: "500px",
              height: "163px",
              padding: "10px 30px",
            }}
          >
            <Table size="small">
              <TableHead>
                <TableRow
                  sx={{
                    ".css-1ndpvdd-MuiTableCell-root": {
                      borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                    },
                  }}
                >
                  <TableCell align="center">Exercise</TableCell>
                  <TableCell align="center">Set range</TableCell>
                  <TableCell align="center">Rep range</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {day.exercises.length === 0 ? (
                  <TableCell
                    colSpan={4}
                    align="center"
                    sx={{ borderBottom: "none" }}
                  >
                    <Typography variant="caption">No exercises</Typography>
                  </TableCell>
                ) : (
                  day.exercises?.map((exercise) => (
                    <TableRow
                      key={exercise.id}
                      sx={{
                        ".css-1yhpg23-MuiTableCell-root": {
                          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                        },
                        ".css-dsuxgy-MuiTableCell-root": {
                          borderBottom: "none",
                        },
                      }}
                    >
                      <TableCell
                        align="center"
                        sx={{ maxWidth: "150px", overflow: "hidden" }}
                      >
                        {exercise.name}
                      </TableCell>
                      <TableCell align="center">
                        {exercise.min_sets}-{exercise.max_sets}
                      </TableCell>
                      <TableCell align="center">
                        {exercise.min_reps}-{exercise.max_reps}
                      </TableCell>
                      <TableCell>
                        <CustomMenu>
                          <DeleteProgramExerciseButton
                            exerciseId={exercise.id}
                          />
                          <EditProgramExerciseButton />
                        </CustomMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <AddProgramExercise dayId={day.id} />
        </Paper>
      </Stack>
    </>
  );
};

export default ProgramExerciseList;
