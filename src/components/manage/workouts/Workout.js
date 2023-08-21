import React, { useContext } from "react";
import dayjs from "dayjs";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";

import AddWorkout from "./AddWorkout";
import { WorkoutsContext } from "../../../context/WorkoutsContext";

const Workout = () => {
  const { todaysWorkout, date } = useContext(WorkoutsContext);

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
            <Typography variant="h6">
              {dayjs(date.$d).format("YYYY-MM-DD")}
            </Typography>
          </Divider>
          {todaysWorkout ? (
            <Box width="100%">
              <List sx={{ height: "180px" }}>
                {todaysWorkout.exercises.map((exercise) => (
                  <ListItem
                    key={exercise.id}
                    disablePadding
                    sx={{ paddingLeft: "10px" }}
                  >
                    - {exercise.name}
                  </ListItem>
                ))}
              </List>
              <Divider />
            </Box>
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
