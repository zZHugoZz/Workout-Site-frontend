import React from "react";
import useInterceptor from "../utils/useInterceptor";
import AddProgramExercise from "./AddProgramExercise";
import { StyledProgramContainer } from "../styles/ContainerStyles";
import { HoverButton } from "../styles/ButtonStyles";
import { StyledIconContainer } from "../styles/IconStyles";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RemoveIcon from "@mui/icons-material/Remove";
import { StyledProgramDayContainer } from "../styles/ContainerStyles";
import ProgramExerciseList from "./ProgramExerciseList";

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
            {/* <h2 style={{ position: "absolute", left: "0" }}>Day {i + 1}</h2>
            <HoverButton
              onClick={() => handleDeleteDay(day.id)}
              style={{ position: "absolute", right: "0" }}
            >
              <StyledIconContainer>
                <DeleteForeverIcon style={{ color: "#E84444" }} />
              </StyledIconContainer>
            </HoverButton> */}
            {/* <div
              style={{
                display: "flex",
                width: "100%",
                outline: "1px solid red",
              }}
            ></div> */}
            <StyledProgramDayContainer>
              <div>
                <h2>Day {i + 1}</h2>
              </div>
              <div>
                <HoverButton onClick={() => handleDeleteDay(day.id)}>
                  <StyledIconContainer>
                    <DeleteForeverIcon style={{ color: "#E84444" }} />
                  </StyledIconContainer>
                </HoverButton>
              </div>
            </StyledProgramDayContainer>
            <hr />
            <AddProgramExercise
              dayId={day.id}
              setDays={setDays}
              programId={programId}
            />
            <ProgramExerciseList
              day={day}
              handleDeleteExercise={handleDeleteExercise}
            />
          </article>
        ))}
      </StyledProgramContainer>
    </>
  );
};

export default ProgramDaysList;
