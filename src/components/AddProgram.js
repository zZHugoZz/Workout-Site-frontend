import React from "react";
import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

import AddProgramDialog from "./AddProgramDialog";

const AddProgram = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setIsOpen(true)} title="Create new program">
        <AddIcon sx={{ color: "green" }} />
      </IconButton>
      <AddProgramDialog open={isOpen} />
    </>
  );
};

export default AddProgram;
