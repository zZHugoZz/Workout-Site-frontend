import React, { useState, createContext } from "react";

export const ProgramsContext = createContext();

export default function ProgramsProvider({ children }) {
  const [programs, setPrograms] = useState([]);

  const contextData = {
    programs: programs,
    setPrograms: setPrograms,
  };

  return (
    <ProgramsContext.Provider value={contextData}>
      {children}
    </ProgramsContext.Provider>
  );
}
