import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

import WorkoutExerciseList from "../../components/manage/workouts/WorkoutExerciseList";
import useInterceptor from "../../utils/useInterceptor";
import { WorkoutContext } from "../../context/WorkoutContext";
import AddWorkoutExercise from "../../components/manage/workouts/AddWorkoutExercise";
import PageContainer from "../../utils/PageContainer";

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
      <PageContainer maxWidth="xs" pageName="Workouts">
        <Stack alignItems="center" spacing={3}>
          <WorkoutExerciseList />
          <Divider sx={{ width: "100%" }}></Divider>
          <AddWorkoutExercise />
        </Stack>
      </PageContainer>
    </>
  );
};

export default WorkoutsPage;
