import React from "react";
import { createContext, useState } from "react";

export const WorkoutsContext = createContext();

export default function WorkoutsProvider({ children }) {
  const [todaysWorkout, setTodaysWorkout] = useState(null);
  const [date, setDate] = useState("");

  const contextData = {
    todaysWorkout: todaysWorkout,
    setTodaysWorkout: setTodaysWorkout,
    date: date,
    setDate: setDate,
  };

  return (
    <WorkoutsContext.Provider value={contextData}>
      {children}
    </WorkoutsContext.Provider>
  );
}
