import React from "react";

import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";

const Settings = () => {
  return (
    <>
      <IconButton color="inherit">
        <SettingsIcon />
      </IconButton>
      <Menu></Menu>
    </>
  );
};

export default Settings;
