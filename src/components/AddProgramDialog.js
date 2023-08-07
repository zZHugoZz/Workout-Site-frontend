import React from "react";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

const AddProgramDialog = ({ open }) => {
  return (
    <>
      <Dialog open={open}>
        <DialogTitle>Create Program</DialogTitle>
      </Dialog>
    </>
  );
};

export default AddProgramDialog;
