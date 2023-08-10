import React from "react";

import AddIcon from "@mui/icons-material/Add";

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
      <button
        onClick={openDialog}
        style={{ width: "100%", height: "35px", cursor: "pointer" }}
      >
        <AddIcon style={{ color: "#3DFF54" }} />
      </button>
      <button className={`dialog-${dayId}`}>
        <AddProgramExerciseForm
          dayId={dayId}
          setDays={setDays}
          programId={programId}
          closeDialog={closeDialog}
        />
      </button>
    </>
  );
};

export default AddProgramExercise;
