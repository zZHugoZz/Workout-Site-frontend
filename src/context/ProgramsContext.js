import React, { useState, createContext, useEffect } from "react";

export const ProgramsContext = createContext();

export default function ProgramsProvider({ children }) {
  const [programs, setPrograms] = useState([]);

  const contextData = {
    programs: programs,
    setPrograms: setPrograms,
  };

  useEffect(() => {
    console.log("programs: ", programs);
  }, [programs]);

  return (
    <ProgramsContext.Provider value={contextData}>
      {children}
    </ProgramsContext.Provider>
  );
}
