import React from "react";
import useInterceptor from "../utils/useInterceptor";
import AddProgramExercise from "./AddProgramExercise";
import { StyledProgramContainer } from "../styles/ContainerStyles";
import { InvisibleButton } from "../styles/ButtonStyles";
import RemoveIcon from "@mui/icons-material/Remove";

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
      <StyledProgramContainer>
        {days.map((day, i) => (
          <article key={day.id}>
            <h2>Day {i + 1}</h2>
            <AddProgramExercise
              dayId={day.id}
              setDays={setDays}
              programId={programId}
            />
            <button onClick={() => handleDeleteDay(day.id)}>Delete day</button>
            <ul>
              {day.exercises.map((exercise) => (
                <li key={exercise.id}>
                  <p>{exercise.name}</p>
                  <InvisibleButton
                    onClick={() => handleDeleteExercise(exercise.id)}
                  >
                    Delete exercise
                  </InvisibleButton>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </StyledProgramContainer>
    </>
  );
};

export default ProgramDaysList;
