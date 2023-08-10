import React from "react";
import { useContext, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const PrivateRoutes = () => {
  const { user, handleLogout } = useContext(AuthContext);

  // useEffect(() => {
  //   let currentTime = Math.floor(Date.now() / 1000);
  //   console.log("current time: ", currentTime);
  //   console.log("exp: ", user.exp);
  //   if (currentTime >= user.exp) {
  //     handleLogout();
  //   }
  // });

  return <>{user ? <Outlet /> : <Navigate to={"/login"} />}</>;
};

export default PrivateRoutes;
