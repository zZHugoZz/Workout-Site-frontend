import React, { useEffect, useContext } from "react";
import { useState } from "react";
import dayjs from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";

import WorkoutDay from "./WorkoutDay";
import useInterceptor from "../../../utils/useInterceptor";
import { WorkoutsContext } from "../../../context/WorkoutsContext";
import useFilterWorkouts from "../../../utils/useFilterWorkouts";

const WorkoutsCalendar = () => {
  const { setTodaysWorkout, setDate } = useContext(WorkoutsContext);
  const axiosInterceptor = useInterceptor();

  const [value, setValue] = useState(dayjs());
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const { highlightedDays, setHighlightedDays, filterWorkouts } =
    useFilterWorkouts(setIsLoading);

  const handleChange = async (value) => {
    setValue(value);
    try {
      setIsDisabled(true);
      const response = await axiosInterceptor.get(
        "/workouts/workout_by_date/",
        {
          params: {
            date: dayjs(value.$d).format("YYYY-MM-DD"),
          },
        }
      );
      setTodaysWorkout(response.data);
      setIsDisabled(false);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  const handleMonthChange = async (month) => {
    await filterWorkouts(month.$M, month.$y);
  };

  const handleYearChange = async (year) => {
    await filterWorkouts(year.$M, year.$y);
  };

  useEffect(() => {
    axiosInterceptor
      .get("/workouts/filter/", {
        params: {
          month: value.$M + 1,
          year: value.$y,
        },
      })
      .then((response) => setHighlightedDays(response.data));
  }, []);

  useEffect(() => {
    setDate(value);
  }, [value]);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={value}
          disabled={isDisabled}
          loading={isLoading}
          renderLoading={() => <DayCalendarSkeleton />}
          sx={{ margin: "0" }}
          onChange={handleChange}
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
