import React, { useContext } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import { Link as MUILink } from "@mui/material";

import AddWorkout from "./AddWorkout";
import { WorkoutsContext } from "../../../context/WorkoutsContext";
import CustomMenu from "../../../utils/CustomMenu";
import DeleteWorkout from "./DeleteWorkout";
import AccessWorkout from "./AccessWorkout";

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
              {todaysWorkout.exercises.length === 0 ? (
                <Stack alignItems="center" sx={{ height: "180px" }}>
                  <Typography variant="body2">
                    No exercises, add one{" "}
                    <MUILink
                      component={Link}
                      to={`workouts/${todaysWorkout.id}`}
                    >
                      here
                    </MUILink>
                  </Typography>
                </Stack>
              ) : (
                <List sx={{ height: "180px" }}>
                  {todaysWorkout.exercises.map((exercise) => (
                    <ListItem
                      key={exercise.id}
                      disablePadding
                      sx={{ paddingLeft: "10px" }}
                    >
                      <Typography variant="body2">
                        - {exercise.name}&nbsp;
                      </Typography>{" "}
                      <Typography variant="body2">
                        ({exercise.n_sets}
                        {exercise.n_sets > 1 ? <>&nbsp;sets</> : <>&nbsp;set</>}
                        )
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              )}
              <Divider />
              <Stack paddingTop={0.8} alignItems="end">
                <CustomMenu>
                  <DeleteWorkout workoutId={todaysWorkout.id} />
                  <AccessWorkout workoutId={todaysWorkout.id} />
                </CustomMenu>
              </Stack>
            </Box>
          ) : (
            <Box>
              <Stack alignItems="center" sx={{ height: "180px" }}>
                <Typography variant="body1">
                  You didn't workout this day
                </Typography>
                <AddWorkout />
              </Stack>
              <Divider flexItem />
            </Box>
          )}
        </Stack>
      </Paper>
    </>
  );
};

export default Workout;
