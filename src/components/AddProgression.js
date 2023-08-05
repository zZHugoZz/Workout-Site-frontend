import React from "react";

import AddIcon from "@mui/icons-material/Add";

import AddProgressionForm from "./AddProgressionForm";

const AddProgression = ({ setProgressions }) => {
  const openDialog = () => {
    const dialog = document.querySelector(".add-progression-dialog");
    dialog.showModal();
  };

  const closeDialog = () => {
    const dialog = document.querySelector(".add-progression-dialog");
    dialog.close();
  };

  return (
    <>
      <button onClick={openDialog} title="Add a new progression">
        <AddIcon style={{ color: "white" }} />
      </button>
      <dialog className="add-progression-dialog">
        <AddProgressionForm setProgressions={setProgressions} />
        <button onClick={closeDialog}>Close</button>
      </dialog>
    </>
  );
};

export default AddProgression;
