import React from "react";
import { useContext } from "react";
import { StyledSiteHeaderNav } from "../styles/NavStyles";
import { StyledNavLink } from "../styles/LinkStyles";
import LogoutIcon from "@mui/icons-material/Logout";
import { AuthContext } from "../context/AuthContext";
import MenuIcon from "@mui/icons-material/Menu";

const SiteHeaderNav = () => {
  const { handleLogout } = useContext(AuthContext);

  return (
    <>
      <StyledSiteHeaderNav>
        <span>
          <StyledNavLink to={"/profile/"} className="nav-icon">
            Profile
          </StyledNavLink>
        </span>
        <span>
          <StyledNavLink to={"/manage/"} className="nav-icon">
            Manage
          </StyledNavLink>
        </span>
        <span>
          <StyledNavLink to={"/nutrition/"} className="nav-icon">
            Nutrition
          </StyledNavLink>
        </span>
        <span>
          <StyledNavLink to={"/explore/"} className="nav-icon">
            Explore
          </StyledNavLink>
        </span>
        <span>
          <StyledNavLink to={"/community/"} className="nav-icon">
            Community
          </StyledNavLink>
        </span>
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
          }}
          onClick={handleLogout}
          className="nav-icon"
        >
          <i style={{ display: "inline-flex", verticalAlign: "top" }}>
            <LogoutIcon fontSize="small" />
          </i>
        </button>
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
          }}
          className="menu-icon"
        >
          <i style={{ display: "inline-flex", verticalAlign: "top" }}>
            <MenuIcon />
          </i>
        </button>
      </StyledSiteHeaderNav>
    </>
  );
};

export default SiteHeaderNav;
