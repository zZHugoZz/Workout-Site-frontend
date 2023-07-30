import React from "react";
import { StyledDialog } from "../styles/DialogStyles";
import AddProgramExerciseForm from "./AddProgramExerciseForm";
import AddIcon from "@mui/icons-material/Add";
import { HoverButton } from "../styles/ButtonStyles";
import { StyledIconContainer } from "../styles/IconStyles";

const AddProgramExercise = ({ dayId, setDays, programId }) => {
  const openDialog = () => {
    const dialog = document.querySelector(`.dialog-${dayId}`);
    dialog.showModal();
  };

  const closeDialog = () => {
    const dialog = document.querySelector(`.dialog-${dayId}`);
    dialog.close();
  };

  return (
    <>
      <HoverButton onClick={openDialog}>
        <StyledIconContainer>
          <AddIcon style={{ color: "#3DFF54" }} />
        </StyledIconContainer>
      </HoverButton>
      <StyledDialog className={`dialog-${dayId}`}>
        <h2>Dialog {dayId}</h2>
        <AddProgramExerciseForm
          dayId={dayId}
          setDays={setDays}
          programId={programId}
        />
        <button onClick={closeDialog}>Close</button>
      </StyledDialog>
    </>
  );
};

export default AddProgramExercise;
