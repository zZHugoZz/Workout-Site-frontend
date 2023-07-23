import React from "react";
import { useContext } from "react";
import { StyledSiteHeaderNav } from "../styles/NavStyles";
import { StyledNavLink } from "../styles/LinkStyles";
import LogoutIcon from "@mui/icons-material/Logout";
import { AuthContext } from "../context/AuthContext";

const SiteHeaderNav = () => {
  const { handleLogout } = useContext(AuthContext);

  return (
    <>
      <StyledSiteHeaderNav>
        <span>
          <StyledNavLink to={"/profile/"}>Profile</StyledNavLink>
        </span>
        <span>
          <StyledNavLink to={"/manage/"}>Manage</StyledNavLink>
        </span>
        <span>
          <StyledNavLink to={"/nutrition/"}>Nutrition</StyledNavLink>
        </span>
        <span>
          <StyledNavLink to={"/explore/"}>Explore</StyledNavLink>
        </span>
        <span>
          <StyledNavLink to={"/community/"}>Community</StyledNavLink>
        </span>
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
          }}
          onClick={handleLogout}
        >
          <i style={{ display: "inline-flex", verticalAlign: "top" }}>
            <LogoutIcon fontSize="small" />
          </i>
        </button>
      </StyledSiteHeaderNav>
    </>
  );
};

export default SiteHeaderNav;
