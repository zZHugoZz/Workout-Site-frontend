import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import WorkoutExerciseList from "../../components/manage/workouts/WorkoutExerciseList";
import useInterceptor from "../../utils/useInterceptor";
import { WorkoutContext } from "../../context/WorkoutContext";
import AddWorkoutExercise from "../../components/manage/workouts/AddWorkoutExercise";

const WorkoutsPage = () => {
  const { setWorkoutId, setExercises } = useContext(WorkoutContext);
  const axiosInterceptor = useInterceptor();
  const { id } = useParams();
  const [workoutDate, setWorkoutDate] = useState("");

  useEffect(() => {
    axiosInterceptor.get(`/workouts/${id}`).then((response) => {
      setExercises(response.data.exercises);
      setWorkoutDate(response.data.date);
    });
  }, []);

  useEffect(() => {
    setWorkoutId(id);
  }, [id]);

  return (
    <>
      <Container maxWidth="xs" sx={{ marginTop: "50px" }}>
        <Divider sx={{ marginBottom: "50px" }}>
          <Typography variant="h4">Workouts</Typography>
        </Divider>
        <Stack alignItems="center" spacing={3}>
          <WorkoutExerciseList />
          <Divider sx={{ width: "100%" }}></Divider>
          <AddWorkoutExercise />
        </Stack>
      </Container>
    </>
  );
};

export default WorkoutsPage;
