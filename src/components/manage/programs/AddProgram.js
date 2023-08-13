import React from "react";
import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

import CustomDialog from "../../../utils/CustomDialog";
import AddProgramForm from "./AddProgramForm";

const AddProgram = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setIsOpen(true)} title="Create new program">
        <AddIcon sx={{ color: "green" }} />
      </IconButton>
      <CustomDialog
        title="Create new program"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <AddProgramForm />
      </CustomDialog>
    </>
  );
};

export default AddProgram;
