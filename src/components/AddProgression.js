import React from "react";
import AddProgressionForm from "./AddProgressionForm";
import { SmallGreenButton } from "../styles/ButtonStyles";
import { StyledIconContainer } from "../styles/IconStyles";
import AddIcon from "@mui/icons-material/Add";

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
      <SmallGreenButton onClick={openDialog} title="Add a new progression">
        <StyledIconContainer>
          <AddIcon style={{ color: "white" }} />
        </StyledIconContainer>
      </SmallGreenButton>
      <dialog className="add-progression-dialog">
        <AddProgressionForm setProgressions={setProgressions} />
        <button onClick={closeDialog}>Close</button>
      </dialog>
    </>
  );
};

export default AddProgression;
