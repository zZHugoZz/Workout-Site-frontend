import React from "react";
import useInterceptor from "../utils/useInterceptor";
import AddProgramExercise from "./AddProgramExercise";
import { StyledProgramContainer } from "../styles/ContainerStyles";
import { HoverButton } from "../styles/ButtonStyles";
import { StyledIconContainer } from "../styles/IconStyles";
import RemoveIcon from "@mui/icons-material/Remove";
import { StyledProgramDayContainer } from "../styles/ContainerStyles";

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
            <StyledProgramDayContainer>
              <div>
                <h2>Day {i + 1}</h2>
              </div>
              <div>
                <HoverButton onClick={() => handleDeleteDay(day.id)}>
                  <StyledIconContainer>
                    <RemoveIcon style={{ color: "#E84444" }} />
                  </StyledIconContainer>
                </HoverButton>
              </div>
            </StyledProgramDayContainer>

            <AddProgramExercise
              dayId={day.id}
              setDays={setDays}
              programId={programId}
            />
            <ul>
              {day.exercises.map((exercise) => (
                <li key={exercise.id}>
                  <p>{exercise.name}</p>
                  <HoverButton
                    onClick={() => handleDeleteExercise(exercise.id)}
                  >
                    <StyledIconContainer>
                      <RemoveIcon style={{ color: "#E84444" }} />
                    </StyledIconContainer>
                  </HoverButton>
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
