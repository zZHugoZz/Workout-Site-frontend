import React from "react";
import { StyledDialog } from "../styles/DialogStyles";
import AddProgramExerciseForm from "./AddProgramExerciseForm";

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
      <button onClick={openDialog}>Add exercise</button>
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
