import React, { createContext, useState } from "react";

export const ProgressionsContext = createContext();

export default function ProgressionsProvider({ children }) {
  const [progressions, setProgressions] = useState([]);

  const contextData = {
    progressions: progressions,
    setProgression: setProgressions,
  };

  return (
    <ProgressionsContext.Provider value={contextData}>
      {children}
    </ProgressionsContext.Provider>
  );
}
