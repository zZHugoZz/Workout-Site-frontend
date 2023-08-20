import React, { useContext } from "react";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import AddWorkout from "./AddWorkout";
import { WorkoutsContext } from "../../../context/WorkoutsContext";

const Workout = () => {
  const { todaysWorkout } = useContext(WorkoutsContext);

  return (
    <>
      <Paper
        sx={{
          height: "270px",
          padding: "5px",
          marginRight: "10px",
          backgroundColor: "#f9ffdf",
        }}
        elevation={2}
      >
        <Stack alignItems="center">
          <Divider textAlign="center" sx={{ width: "100%" }}>
            <Typography variant="h6">Workout</Typography>
          </Divider>
          {todaysWorkout ? (
            <Typography variant="body1">{todaysWorkout.date}</Typography>
          ) : (
            <Box>
              <Typography variant="body1">
                You didn't workout this day
              </Typography>
              <AddWorkout />
            </Box>
          )}
        </Stack>
      </Paper>
    </>
  );
};

export default Workout;
