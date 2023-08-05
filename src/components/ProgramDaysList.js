import React from "react";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import useInterceptor from "../utils/useInterceptor";
import ProgramExerciseList from "./ProgramExerciseList";
import AddDay from "./AddDay";

const ProgramDaysList = ({ days, programId, setDays }) => {
  const axiosInterceptor = useInterceptor();

  const handleDeleteDay = async (dayId) => {
    await axiosInterceptor.delete(`/program_days/${dayId}`);
    axiosInterceptor.get(`/programs/${programId}`).then((response) => {
      setDays(response.data.days);
    });
  };

  const handleDeleteExercise = async (exerciseId) => {
    await axiosInterceptor.delete(`/program_exercises/${exerciseId}`);
    axiosInterceptor.get(`/programs/${programId}`).then((response) => {
      setDays(response.data.days);
    });
  };

  return (
    <>
      {days.map((day, i) => (
        <article key={day.id} style={{ position: "relative" }}>
          <h2>Day {i + 1}</h2>

          <button onClick={() => handleDeleteDay(day.id)}>
            <DeleteForeverIcon style={{ color: "#E84444" }} />
          </button>
          <ProgramExerciseList
            day={day}
            handleDeleteExercise={handleDeleteExercise}
            setDays={setDays}
            programId={programId}
          />
        </article>
      ))}
      <section>
        <AddDay id={programId} setDays={setDays} />
      </section>
    </>
  );
};

export default ProgramDaysList;
