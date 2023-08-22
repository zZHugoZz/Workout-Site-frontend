import React from "react";
import { useNavigate } from "react-router-dom";

import AccessTextButton from "../../../utils/AccessTextButton";

const AccessProgram = ({ programId }) => {
  const navigate = useNavigate();

  return (
    <>
      <AccessTextButton onClick={() => navigate(`programs/${programId}`)} />
    </>
  );
};

export default AccessProgram;
