import React from "react";
import { createContext, useState } from "react";

export const WorkoutsContext = createContext();

export default WorkoutsProvider = ({ children }) => {
  const contextData = {};

  return (
    <WorkoutsContext.Provider value={contextData}>
      {children}
    </WorkoutsContext.Provider>
  );
};
