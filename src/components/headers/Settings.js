import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";

import CustomDialog from "../../utils/CustomDialog";
import SelectUnit from "./SelectUnit";

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton color="inherit" onClick={() => setIsOpen(true)}>
        <SettingsIcon />
      </IconButton>
      <CustomDialog title="Settings" isOpen={isOpen} setIsOpen={setIsOpen}>
        <SelectUnit />
      </CustomDialog>
    </>
  );
};

export default Settings;
