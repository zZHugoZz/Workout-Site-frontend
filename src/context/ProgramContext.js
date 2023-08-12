import React, { createContext, useState } from "react";

export const ProgramContext = createContext();

export default function ProgramProvider({ children }) {
  const [currentProgram, setCurrentProgram] = useState({});
  const [programId, setProgramId] = useState(null);
  const [days, setDays] = useState([]);

  const contextData = {
    currentProgram: currentProgram,
    setCurrentProgram: setCurrentProgram,
    programId: programId,
    setProgramId: setProgramId,
    days: days,
    setDays: setDays,
  };

  return (
    <ProgramContext.Provider value={contextData}>
      {children}
    </ProgramContext.Provider>
  );
}
