import React from "react";
import { useState } from "react";

const WorkoutsCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <span>{date.toDateString()}</span>
    </>
  );
};

export default WorkoutsCalendar;
