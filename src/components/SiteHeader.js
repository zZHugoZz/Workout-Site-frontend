import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SiteName from "./SiteName";

const SiteHeader = () => {
  return (
    <>
      <AppBar style={{ position: "sticky" }}>
        <Toolbar style={{ margin: "0 30px" }}>
          <SiteName />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default SiteHeader;
