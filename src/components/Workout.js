import React from "react";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

const Workout = () => {
  return (
    <>
      <Stack alignContent="center">
        <Divider textAlign="center">
          <Typography variant="h6">Workout</Typography>
        </Divider>
        <Typography variant="body1">You didn't workout this day</Typography>
      </Stack>
    </>
  );
};

export default Workout;
