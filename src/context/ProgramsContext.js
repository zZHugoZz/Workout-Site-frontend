import React, { useState, createContext } from "react";

import useInterceptor from "../utils/useInterceptor";

export const ProgramsContext = createContext();

export default function ProgramsProvider({ children }) {
  const axiosInterceptor = useInterceptor();

  const [programs, setPrograms] = useState([]);

  const handleDeleteProgram = async (id) => {
    try {
      await axiosInterceptor.delete(`/programs/${id}`);
      const updatedPrograms = programs.filter((program) => program.id !== id);
      setPrograms(updatedPrograms);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  const contextData = {
    programs: programs,
    setPrograms: setPrograms,
    handleDeleteProgram: handleDeleteProgram,
  };

  return (
    <ProgramsContext.Provider value={contextData}>
      {children}
    </ProgramsContext.Provider>
  );
}
