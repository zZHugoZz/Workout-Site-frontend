import React from "react";
import { useState } from "react";
import dayjs from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import WorkoutDay from "./WorkoutDay";

const WorkoutsCalendar = () => {
  const [highlightedDays, setHighlightedDays] = useState([4, 5, 14]);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          sx={{ margin: "0" }}
          onChange={(value) => console.log("value: ", value.$y)}
          defaultValue={dayjs()}
          slots={{
            day: WorkoutDay,
          }}
          slotProps={{
            day: {
              highlightedDays,
            },
          }}
        />
      </LocalizationProvider>
    </>
  );
};

export default WorkoutsCalendar;
