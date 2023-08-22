import React, { useContext } from "react";

import useInterceptor from "./useInterceptor";
import { WorkoutsContext } from "../context/WorkoutsContext";

const useFilterWorkouts = (setIsLoading) => {
  const { setMonthlyWorkouts, setDates, setHighlightedDays } =
    useContext(WorkoutsContext);
  const axiosInterceptor = useInterceptor();

  const filterWorkouts = async (month, year) => {
    try {
      setIsLoading(true);
      const response = await axiosInterceptor.get("/workouts/filter/", {
        params: {
          month: month + 1,
          year,
        },
      });
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
      setIsLoading(false);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  return { filterWorkouts };
};

export default useFilterWorkouts;
