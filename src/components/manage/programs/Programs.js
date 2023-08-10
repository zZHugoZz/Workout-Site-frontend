import React from "react";
import AddProgram from "./AddProgram";
import ProgramsList from "./ProgramsList";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Programs = () => {
  return (
    <>
      <Divider
        textAlign="left"
        sx={{ marginTop: "10px", marginBottom: "15px" }}
      >
        <Stack direction="row" alignItems="center">
          <Typography variant="h5">Programs</Typography>
          <AddProgram />
        </Stack>
      </Divider>
      <ProgramsList />
    </>
  );
};

export default Programs;
