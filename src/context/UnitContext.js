import React, { useState, createContext, useEffect } from "react";

import useInterceptor from "../utils/useInterceptor";

export const UnitContext = createContext();

export default function UnitProvider({ children }) {
  const axiosInterceptor = useInterceptor();

  const [unit, setUnit] = useState("Kg");

  const updateUnit = async () => {
    await axiosInterceptor("/units");
  };

  const contextData = {
    unit: unit,
    setUnit: setUnit,
    updateUnit: updateUnit,
  };

  return (
    <UnitContext.Provider value={contextData}>{children}</UnitContext.Provider>
  );
}
