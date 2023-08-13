import React, { useState, createContext } from "react";

export const UnitContext = createContext();

export default function UnitProvider({ children }) {
  const [unit, setUnit] = useState(null);

  const contextData = {
    unit: unit,
    setUnit: setUnit,
  };

  return (
    <UnitContext.Provider value={contextData}>{children}</UnitContext.Provider>
  );
}
