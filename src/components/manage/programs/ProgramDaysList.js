import React, { useContext } from "react";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";

import useInterceptor from "../../../utils/useInterceptor";
import ProgramExerciseList from "./ProgramExerciseList";
import AddDay from "./AddDay";
import { ProgramContext } from "../../../context/ProgramContext";
import CardTitle from "../../../utils/CardTitle";

const ProgramDaysList = () => {
  const { days, setDays, programId } = useContext(ProgramContext);
  const axiosInterceptor = useInterceptor();

  const handleDeleteDay = async (dayId) => {
    try {
      await axiosInterceptor.delete(`/program_days/${dayId}`);
      axiosInterceptor.get(`/programs/${programId}`).then((response) => {
        setDays(response.data.days);
      });
    } catch (err) {
      console.log("error: ", err);
    }
  };

  const handleDeleteExercise = async (exerciseId) => {
    try {
      await axiosInterceptor.delete(`/program_exercises/${exerciseId}`);
      const updatedDays = days.map((day) => {
        const updatedExercises = day.exercises.filter(
          (exercise) => exercise.id !== exerciseId
        );
        return { ...day, exercises: updatedExercises };
      });
      setDays(updatedDays);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  return (
    <>
      <Grid container spacing={4}>
        {days.map((day, i) => (
          <Grid xs={6} key={day.id}>
            <Card sx={{ backgroundColor: "#f5eeda" }}>
              <CardTitle>Day {i + 1}</CardTitle>
              <ProgramExerciseList
                day={day}
                handleDeleteExercise={handleDeleteExercise}
              />
              <button onClick={() => handleDeleteDay(day.id)}>
                <DeleteForeverIcon style={{ color: "#E84444" }} />
              </button>
            </Card>
          </Grid>
        ))}
      </Grid>

      <section>
        <AddDay />
      </section>
    </>
  );
};

export default ProgramDaysList;
