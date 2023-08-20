import React, { useEffect, useContext } from "react";
import { useState } from "react";
import dayjs from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import WorkoutDay from "./WorkoutDay";
import useInterceptor from "../../../utils/useInterceptor";
import { WorkoutsContext } from "../../../context/WorkoutsContext";

const WorkoutsCalendar = () => {
  const { setDate } = useContext(WorkoutsContext);
  const axiosInterceptor = useInterceptor();

  const [highlightedDays, setHighlightedDays] = useState([2]);
  const [value, setValue] = useState(dayjs());

  const handleMonthChange = async (month) => {
    // try {
    //   axiosInterceptor.get()
    // }
    console.log("new month: ", month);
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
