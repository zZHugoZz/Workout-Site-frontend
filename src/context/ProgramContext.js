import React, { createContext, useState } from "react";

export const ProgramContext = createContext();

export default function ProgramProvider({ children }) {
  const [currentProgram, setCurrentProgram] = useState({});

  const contextData = {
    currentProgram: currentProgram,
    setCurrentProgram: setCurrentProgram,
  };

  return (
    <ProgramContext.Provider value={contextData}>
      {children}
    </ProgramContext.Provider>
  );
}
