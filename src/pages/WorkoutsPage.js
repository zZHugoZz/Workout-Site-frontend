import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import WorkoutExerciseList from "../components/WorkoutExerciseList";
import useInterceptor from "../utils/useInterceptor";
import { WorkoutContext } from "../context/WorkoutContext";

const WorkoutsPage = () => {
  const { setWorkoutId, currentWorkout, setCurrentWorkout, setExercises } =
    useContext(WorkoutContext);
  const axiosInterceptor = useInterceptor();
  const { id } = useParams();
  const [workoutDate, setWorkoutDate] = useState("");

  useEffect(() => {
    axiosInterceptor.get(`/workouts/${id}`).then((response) => {
      setCurrentWorkout(response.data);
      setWorkoutDate(response.data.date);
    });
  }, []);

  useEffect(() => {
    setWorkoutId(id);
  }, [id]);

  useEffect(() => {
    setExercises(currentWorkout.exercises);
  }, [currentWorkout]);

  return (
    <>
      <Container maxWidth="xs" sx={{ marginTop: "50px" }}>
        <Divider sx={{ marginBottom: "50px" }}>
          <Typography variant="h4">Workouts</Typography>
        </Divider>
        <WorkoutExerciseList />
      </Container>
    </>
  );
};

export default WorkoutsPage;
