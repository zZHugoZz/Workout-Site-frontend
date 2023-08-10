import React, { useState } from "react";

import Collapse from "@mui/material/Collapse";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

import DeleteWorkoutExerciseButton from "./DeleteWorkoutExerciseButton";
import DeleteWorkoutExerciseSetButton from "./DeleteWorkoutExerciseSetButton";

const CollapsibleRow = ({ row, handleAddWorkoutExercise }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell align="left" colSpan={3}>
          <Stack direction="row" alignItems="center">
            <IconButton onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ width: "100%" }}
            >
              <Typography>{row.name}</Typography>
              <DeleteWorkoutExerciseButton exerciseId={row.id} />
            </Stack>
          </Stack>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Divider textAlign="left">
                <Stack direction="row" alignItems="center">
                  <Typography variant="h6">Sets</Typography>
                  <IconButton
                    title="Add set"
                    onClick={() => handleAddWorkoutExercise(row.id)}
                  >
                    <AddIcon color="success" />
                  </IconButton>
                </Stack>
              </Divider>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Sets</TableCell>
                    <TableCell>Reps</TableCell>
                    <TableCell>Weight</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.sets.map((set, i) => (
                    <TableRow key={set.id}>
                      <TableCell>Set {i + 1}</TableCell>
                      <TableCell>{set.reps}</TableCell>
                      <TableCell>{set.weight}</TableCell>
                      <TableCell>
                        <DeleteWorkoutExerciseSetButton setId={set.id} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default CollapsibleRow;
