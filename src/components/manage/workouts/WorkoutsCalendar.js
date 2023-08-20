import React, { useEffect, useContext } from "react";
import { useState } from "react";
import dayjs from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import WorkoutDay from "./WorkoutDay";
import useInterceptor from "../../../utils/useInterceptor";
import { WorkoutsContext } from "../../../context/WorkoutsContext";
import useFilterWorkouts from "../../../utils/useFilterWorkouts";

const WorkoutsCalendar = () => {
  const { setDate } = useContext(WorkoutsContext);
  const { highlightedDays, filterWorkouts } = useFilterWorkouts();
  const axiosInterceptor = useInterceptor();

  const [value, setValue] = useState(dayjs());

  const handleMonthChange = async (month) => {
    await filterWorkouts(month.$M, month.$y);
  };

  const handleYearChange = async (year) => {
    await filterWorkouts(year.$M, year.$y);
  };

  useEffect(() => {
    setDate(value);
  }, [value]);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={value}
          sx={{ margin: "0" }}
          onChange={(value) => setValue(value)}
          onMonthChange={handleMonthChange}
          onYearChange={handleYearChange}
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
