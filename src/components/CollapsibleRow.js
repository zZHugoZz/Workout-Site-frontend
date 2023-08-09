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

const CollapsibleRow = ({ row }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell align="left" colSpan={3}>
          <Stack direction="row" alignItems="center">
            <IconButton onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            <Typography>{row.name}</Typography>
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
                  <IconButton title="Add set">
                    <AddIcon color="success" />
                  </IconButton>
                </Stack>
              </Divider>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Set</TableCell>
                    <TableCell>Reps</TableCell>
                    <TableCell>Weight</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.sets.map((set) => (
                    <TableRow key={set.id}>
                      <TableCell>Set {set.id + 1}</TableCell>
                      <TableCell>{set.reps}</TableCell>
                      <TableCell>{set.weight}</TableCell>
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
