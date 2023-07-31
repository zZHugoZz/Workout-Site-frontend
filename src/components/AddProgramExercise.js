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
      <HoverButton
        onClick={openDialog}
        style={{ width: "100%", height: "35px", cursor: "pointer" }}
      >
        <StyledIconContainer>
          <AddIcon style={{ color: "#3DFF54" }} />
        </StyledIconContainer>
      </HoverButton>
      <StyledDialog className={`dialog-${dayId}`}>
        <AddProgramExerciseForm
          dayId={dayId}
          setDays={setDays}
          programId={programId}
          closeDialog={closeDialog}
        />
      </StyledDialog>
    </>
  );
};

export default AddProgramExercise;
