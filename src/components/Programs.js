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
        sx={{ marginTop: "10px", marginBottom: "10px" }}
      >
        <Typography variant="h5">Programs</Typography>
      </Divider>
      <AddProgram />
      <ProgramsList />
    </>
  );
};

export default Programs;
