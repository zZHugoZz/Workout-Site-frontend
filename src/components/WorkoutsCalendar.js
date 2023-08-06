import React from "react";
import { useState } from "react";
import dayjs from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const WorkoutsCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar defaultValue={dayjs()} />
      </LocalizationProvider>
    </>
  );
};

export default WorkoutsCalendar;
