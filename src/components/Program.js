import React from "react";
import { useState } from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import { Zoom } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

const Program = ({ program, handleAccess, handleDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Grid xs={6}>
        <Paper
          key={program.id}
          sx={{
            padding: "5px",
            backgroundColor: "#f9ffdf",
          }}
          elevation={1}
        >
          <Divider>
            <Typography variant="h6">{program.name}</Typography>
          </Divider>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" alignItems="center">
              <IconButton onClick={() => handleAccess(program.id)}>
                <OpenInFullIcon fontSize="small" />
              </IconButton>
              <Tooltip
                title={program.description}
                arrow
                open={isOpen}
                onClose={() => setIsOpen(false)}
                TransitionComponent={Zoom}
              >
                <IconButton onClick={() => setIsOpen(true)}>
                  <HelpOutlineIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Stack>
            <IconButton onClick={() => handleDelete(program.id)}>
              <DeleteForeverIcon fontSize="small" color="error" />
            </IconButton>
          </Stack>
        </Paper>
      </Grid>
    </>
  );
};

export default Program;
