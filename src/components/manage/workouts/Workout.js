import React, { useContext } from "react";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

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
          width: "210px",
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
            <Stack alignItems="center">
              <Typography variant="body1">
                You didn't workout this day
              </Typography>
              <AddWorkout />
            </Stack>
          )}
        </Stack>
      </Paper>
    </>
  );
};

export default Workout;
