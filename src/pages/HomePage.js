import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <span>
        <Button onClick={() => navigate("/login")}>Login</Button>
        <Button onClick={() => navigate("/signup")}>Signup</Button>
      </span>
    </>
  );
};

export default HomePage;
