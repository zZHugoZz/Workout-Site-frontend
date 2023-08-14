import React, { useState, useContext } from "react";

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
import IconButton from "@mui/material/IconButton";

import AddWorkoutExerciseSet from "./AddWorkoutExerciseSet";
import { UnitContext } from "../../../context/UnitContext";
import CustomMenu from "../../../utils/CustomMenu";
import EditWorkoutExerciseButton from "./EditWorkoutExerciseButton";
import DeleteWorkoutExerciseButton from "./DeleteWorkoutExerciseButton";
import EditWorkoutExerciseSetButton from "./EditWorkoutExerciseSetButton";
import DeleteWorkoutExerciseSetButton from "./DeleteWorkoutExerciseSetButton";

const CollapsibleRow = ({ row }) => {
  const { unit } = useContext(UnitContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TableRow
        sx={{
          ".css-1ex1afd-MuiTableCell-root": {
            borderTop: "1px solid #a3ab84",
            borderBottom: "none",
          },
        }}
      >
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
              <CustomMenu>
                <EditWorkoutExerciseButton />
                <DeleteWorkoutExerciseButton exerciseId={row.id} />
              </CustomMenu>
            </Stack>
          </Stack>
        </TableCell>
      </TableRow>
      <TableRow
        sx={{
          ".css-1ex1afd-MuiTableCell-root": {
            borderBottom: "none",
            backgroundColor: "#e9e3c4",
          },
        }}
      >
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Divider textAlign="left">
                <Stack direction="row" alignItems="center">
                  <Typography variant="h6">Sets</Typography>
                  <AddWorkoutExerciseSet exerciseId={row.id} />
                </Stack>
              </Divider>
              <Table size="small">
                <TableHead>
                  <TableRow
                    sx={{
                      ".css-1howxi1-MuiTableCell-root": {
                        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                      },
                    }}
                  >
                    <TableCell>Sets</TableCell>
                    <TableCell>Reps</TableCell>
                    <TableCell>Weight</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.sets.map((set, i) => (
                    <TableRow
                      key={set.id}
                      sx={{
                        ".css-dsuxgy-MuiTableCell-root": {
                          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                        },
                        ".css-dsuxgy-MuiTableCell-root:last-child": {
                          borderBottom: "none",
                        },
                      }}
                    >
                      <TableCell>Set {i + 1}</TableCell>
                      <TableCell>{set.reps}</TableCell>
                      <TableCell>
                        {set.weight}
                        {unit}
                      </TableCell>
                      <TableCell>
                        <CustomMenu>
                          <EditWorkoutExerciseSetButton />
                          <DeleteWorkoutExerciseSetButton setId={set.id} />
                        </CustomMenu>
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
