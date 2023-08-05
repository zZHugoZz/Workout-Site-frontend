import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SiteName from "./SiteName";
import SiteHeaderNav from "./SiteHeaderNav";

const SiteHeader = () => {
  return (
    <>
      <AppBar sx={{ position: "sticky", backgroundColor: "#609966" }}>
        <Toolbar sx={{ margin: "0 30px" }}>
          <SiteName />
          <SiteHeaderNav />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default SiteHeader;
