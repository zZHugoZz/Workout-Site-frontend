import React from "react";
import { useState } from "react";

import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import IconButton from "@mui/material/IconButton";

import CustomDialog from "../../../utils/CustomDialog";
import AddProgramForm from "./AddProgramForm";

const AddProgram = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setIsOpen(true)} title="Create new program">
        <AddCircleOutlinedIcon htmlColor="green" />
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
