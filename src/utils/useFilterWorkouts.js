import React, { useState } from "react";

import useInterceptor from "./useInterceptor";

const useFilterWorkouts = (setIsLoading) => {
  const axiosInterceptor = useInterceptor();

  const [highlightedDays, setHighlightedDays] = useState([]);

  const filterWorkouts = async (month, year) => {
    try {
      setIsLoading(true);
      const response = await axiosInterceptor.get("/workouts/filter/", {
        params: {
          month: month + 1,
          year,
        },
      });
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

  return { highlightedDays, setHighlightedDays, filterWorkouts };
};

export default useFilterWorkouts;
