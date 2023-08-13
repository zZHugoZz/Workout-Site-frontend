import React, { useEffect, useContext } from "react";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import AddProgram from "./AddProgram";
import ProgramsList from "./ProgramsList";
import { ProgramsContext } from "../../../context/ProgramsContext";
import CardTitle from "../../../utils/CardTitle";

const Programs = ({ programsList }) => {
  const { setPrograms } = useContext(ProgramsContext);

  useEffect(() => {
    setPrograms(programsList);
  }, [programsList]);

  return (
    <>
      <CardTitle>
        <Stack direction="row" alignItems="center">
          <Typography variant="h5">Programs</Typography>
          <AddProgram />
        </Stack>
      </CardTitle>
      <ProgramsList />
    </>
  );
};

export default Programs;
