import React from "react";

import IconButton from "@mui/material/IconButton";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

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
      <IconButton onClick={openDialog} title="Add new progression">
        <AddCircleOutlinedIcon htmlColor="green" />
      </IconButton>
      <dialog className="add-progression-dialog">
        <AddProgressionForm setProgressions={setProgressions} />
        <button onClick={closeDialog}>Close</button>
      </dialog>
    </>
  );
};

export default AddProgression;
