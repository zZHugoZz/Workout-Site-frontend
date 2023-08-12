import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const AccessProgramButton = ({ programId }) => {
  const navigate = useNavigate();

  return (
    <>
      <Button
        onClick={() => navigate(`programs/${programId}`)}
        startIcon={<ExitToAppIcon />}
        variant="text"
        color="inherit"
        title="Access program"
      >
        Access
      </Button>
    </>
  );
};

export default AccessProgramButton;
