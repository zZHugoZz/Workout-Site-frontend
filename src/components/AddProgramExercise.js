import React from "react";
import { StyledDialog } from "../styles/DialogStyles";

const AddProgramExercise = ({ dayId }) => {
  const openDialog = () => {
    const dialog = document.querySelector(`.dialog-${dayId}`);
    dialog.showModal();
  };

  return (
    <>
      <button onClick={openDialog}>Add exercise</button>
      <StyledDialog className={`dialog-${dayId}`}>
        <h2>Dialog {dayId}</h2>
      </StyledDialog>
    </>
  );
};

export default AddProgramExercise;
