import React, { useState } from "react";

import Collapse from "@mui/material/Collapse";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";

const CollapsibleRow = ({ row }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton onClick={setIsOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.name}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Divider textAlign="left">
                <Typography variant="h6">Sets</Typography>
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
