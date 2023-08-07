import React from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import RemoveIcon from "@mui/icons-material/Remove";
import Grid from "@mui/material/Unstable_Grid2";

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
          elevation={2}
        >
          <Divider>
            <Typography variant="h6">{program.name}</Typography>
          </Divider>
          <IconButton onClick={() => handleAccess(program.id)}>
            <OpenInFullIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(program.id)}>
            <RemoveIcon />
          </IconButton>
        </Paper>
      </Grid>
    </>
  );
};

export default Program;
