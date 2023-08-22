import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

import AddProgressionForm from "./AddProgressionForm";
import CustomDialog from "../../../utils/CustomDialog";

const AddProgression = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setIsOpen(true)}>
        <AddCircleOutlinedIcon htmlColor="green" />
      </IconButton>
      <CustomDialog
        title="Add progression"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <AddProgressionForm />
      </CustomDialog>
    </>
  );
};

export default AddProgression;
