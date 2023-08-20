import React, { useState } from "react";

import useInterceptor from "./useInterceptor";

const useFilterWorkouts = () => {
  const axiosInterceptor = useInterceptor();

  const [highlightedDays, setHighlightedDays] = useState([]);

  const filterWorkouts = async (month, year) => {
    try {
      const response = await axiosInterceptor.get("/workouts/filter/", {
        params: {
          month: month + 1,
          year,
        },
      });
      setHighlightedDays(response.data);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  return { highlightedDays, setHighlightedDays, filterWorkouts };
};

export default useFilterWorkouts;
