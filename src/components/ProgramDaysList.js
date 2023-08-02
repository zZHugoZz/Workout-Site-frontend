import React, { useEffect } from "react";
import useInterceptor from "../utils/useInterceptor";
import { StyledProgramContainer } from "../styles/ContainerStyles";
import { HoverButton } from "../styles/ButtonStyles";
import { StyledIconContainer } from "../styles/IconStyles";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { StyledProgramDayContainer } from "../styles/ContainerStyles";
import ProgramExerciseList from "./ProgramExerciseList";
import { DarkLine } from "../styles/LineStyles";
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
      <StyledProgramContainer>
        {days.map((day, i) => (
          <article key={day.id} style={{ position: "relative" }}>
            <StyledProgramDayContainer>
              <h2>Day {i + 1}</h2>

              <HoverButton onClick={() => handleDeleteDay(day.id)}>
                <StyledIconContainer>
                  <DeleteForeverIcon style={{ color: "#E84444" }} />
                </StyledIconContainer>
              </HoverButton>
            </StyledProgramDayContainer>
            <DarkLine style={{ marginBottom: "20px" }} />
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
      </StyledProgramContainer>
    </>
  );
};

export default ProgramDaysList;
