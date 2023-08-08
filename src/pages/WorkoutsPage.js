import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import WorkoutExerciseList from "../components/WorkoutExerciseList";
import useInterceptor from "../utils/useInterceptor";
import { WorkoutsContext } from "../context/WorkoutsContext";

const WorkoutsPage = () => {
  const { id } = useParams();
  const [exercises, setExercises] = useState([]);
  const [workoutDate, setWorkoutDate] = useState("");

  const { setWorkoutId } = useContext(WorkoutsContext);
  const axiosInterceptor = useInterceptor();

  useEffect(() => {
    axiosInterceptor.get(`/workouts/${id}`).then((response) => {
      setExercises(response.data.exercises);
      setWorkoutDate(response.data.date);
    });
  }, []);

  useEffect(() => {
    setWorkoutId(id);
  }, [id]);

  const openDialog = () => {
    const dialog = document.querySelector(".workout-dialog");
    dialog.showModal();
  };

  return (
    <>
      <Container maxWidth="md" sx={{ marginTop: "50px" }}>
        <Divider sx={{ marginBottom: "50px" }}>
          <Typography variant="h4">Workouts</Typography>
        </Divider>
        <WorkoutExerciseList
          exercises={exercises}
          openDialog={openDialog}
          id={id}
        />
      </Container>
    </>
  );
};

export default WorkoutsPage;
