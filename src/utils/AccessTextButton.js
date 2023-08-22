import React from "react";

import Button from "@mui/material/Button";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const AccessTextButton = ({ onClick, size }) => {
  return (
    <>
      <Button
        onClick={onClick}
        startIcon={<ExitToAppIcon />}
        variant="text"
        color="inherit"
      >
        Access
      </Button>
    </>
  );
};

export default AccessTextButton;
