import React from "react";
import { StyledNavLink } from "../styles/LinkStyles";

const HomePage = () => {
  return (
    <>
      <span>
        <StyledNavLink to={"/login/"}>Login</StyledNavLink>
        <StyledNavLink to={"/signup/"}>Signup</StyledNavLink>
      </span>
    </>
  );
};

export default HomePage;
