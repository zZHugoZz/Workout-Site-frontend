import React from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";

import useInterceptor from "../utils/useInterceptor";

const Program = ({ program, handleAccess, handleDelete }) => {
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
              <IconButton>
                <HelpOutlineIcon fontSize="small" />
              </IconButton>
            </Stack>
            <IconButton onClick={() => handleDelete(program.id)}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Paper>
      </Grid>
    </>
  );
};

export default Program;
