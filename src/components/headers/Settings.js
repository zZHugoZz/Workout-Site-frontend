import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";
import useMediaQuery from "@mui/material/useMediaQuery";

import CustomDialog from "../../utils/CustomDialog";
import SelectUnit from "./SelectUnit";

const Settings = () => {
  const matches = useMediaQuery("(max-width: 1010px)");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {matches ? (
        <Button variant="text" color="inherit" onClick={() => setIsOpen(true)}>
          Settings
        </Button>
      ) : (
        <IconButton color="inherit" onClick={() => setIsOpen(true)}>
          <SettingsIcon />
        </IconButton>
      )}
      <CustomDialog title="Settings" isOpen={isOpen} setIsOpen={setIsOpen}>
        <SelectUnit />
      </CustomDialog>
    </>
  );
};

export default Settings;
