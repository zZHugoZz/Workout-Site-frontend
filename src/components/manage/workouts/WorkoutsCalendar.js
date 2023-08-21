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
  const {
    setTodaysWorkout,
    monthlyWorkouts,
    setMonthlyWorkouts,
    setDate,
    dates,
    setDates,
  } = useContext(WorkoutsContext);
  const axiosInterceptor = useInterceptor();

  const [value, setValue] = useState(dayjs());
  const [isLoading, setIsLoading] = useState(false);

  const { highlightedDays, setHighlightedDays, filterWorkouts } =
    useFilterWorkouts(setIsLoading);

  const handleChange = async (value) => {
    setValue(value);
    const currentDate = dayjs(value.$d).format("YYYY-MM-DD");
    if (dates.includes(currentDate)) {
      console.log("includes");
      setTodaysWorkout(
        monthlyWorkouts.find((workout) => workout.date === currentDate)
      );
    } else {
      console.log("not includes");
      setTodaysWorkout(null);
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
      .then((response) => {
        setMonthlyWorkouts(response.data);
        setDates(
          response.data.map((workout) => {
            return workout.date;
          })
        );
        setHighlightedDays(
          response.data.map((workout) => {
            return workout.day;
          })
        );
      });
  }, []);

  useEffect(() => {
    setDate(value);
  }, [value]);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={value}
          focusedView="month"
          loading={isLoading}
          renderLoading={() => <DayCalendarSkeleton />}
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
          sx={{
            margin: "0",
            ".css-1lkpf4l-MuiYearCalendar-root": {
              height: "210px",
            },
          }}
        />
      </LocalizationProvider>
    </>
  );
};

export default WorkoutsCalendar;
