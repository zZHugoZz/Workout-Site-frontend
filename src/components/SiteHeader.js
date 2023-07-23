import React from "react";
import SiteHeaderNav from "./SiteHeaderNav";
import { StyledSiteHeader } from "../styles/HeaderStyles";
import { StyledSiteName } from "../styles/StyledSiteName";

const SiteHeader = () => {
  return (
    <>
      <StyledSiteHeader>
        <StyledSiteName>
          <h1>Name</h1>
        </StyledSiteName>
        <div>
          <SiteHeaderNav />
        </div>
      </StyledSiteHeader>
    </>
  );
};

export default SiteHeader;
