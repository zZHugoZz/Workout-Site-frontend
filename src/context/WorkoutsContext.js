import React, { useEffect } from "react";
import { createContext, useState } from "react";

export const WorkoutsContext = createContext();

export default function WorkoutsProvider({ children }) {
  const [todaysWorkout, setTodaysWorkout] = useState(null);
  const [monthlyWorkouts, setMonthlyWorkouts] = useState([]);
  const [date, setDate] = useState("");
  const [dates, setDates] = useState([]);

  const contextData = {
    todaysWorkout: todaysWorkout,
    setTodaysWorkout: setTodaysWorkout,
    monthlyWorkouts: monthlyWorkouts,
    setMonthlyWorkouts: setMonthlyWorkouts,
    date: date,
    setDate: setDate,
    dates: dates,
    setDates: setDates,
  };

  useEffect(() => {
    console.log("todaysWorkout: ", todaysWorkout);
  }, [todaysWorkout]);

  useEffect(() => {
    console.log("dates: ", dates);
  }, [dates]);

  return (
    <WorkoutsContext.Provider value={contextData}>
      {children}
    </WorkoutsContext.Provider>
  );
}
