import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "../styles/CalendarStyles.css";

const WorkoutsCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Calendar onChange={setDate} value={date} />
      <span>{date.toDateString()}</span>
    </>
  );
};

export default WorkoutsCalendar;