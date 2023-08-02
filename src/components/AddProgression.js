import React from "react";

const AddProgression = () => {
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
      <button onClick={openDialog}>Add Progression</button>
      <dialog className="add-progression-dialog">
        <button onClick={closeDialog}>Close</button>
      </dialog>
    </>
  );
};

export default AddProgression;
