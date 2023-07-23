import React from "react";
import SiteHeader from "./SiteHeader";
import PageHeader from "./PageHeader";
import { Outlet } from "react-router-dom";

const Headers = () => {
  return (
    <>
      <SiteHeader />
      <PageHeader />
      <Outlet />
    </>
  );
};

export default Headers;
