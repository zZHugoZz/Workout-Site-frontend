import React, { useEffect } from "react";
import { useState } from "react";
import dayjs from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import WorkoutDay from "./WorkoutDay";

const WorkoutsCalendar = () => {
  const [highlightedDays, setHighlightedDays] = useState([4, 5, 14]);
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("value: ", dayjs(value.$d).format("YYYY-MM-DD"));
  }, [value]);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          sx={{ margin: "0" }}
          onChange={(value) => setValue(value)}
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
