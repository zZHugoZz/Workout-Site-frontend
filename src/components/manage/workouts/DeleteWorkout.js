import React, { useState, useContext } from "react";

import DeleteTextButton from "../../../utils/DeleteTextButton";
import useInterceptor from "../../../utils/useInterceptor";
import { WorkoutsContext } from "../../../context/WorkoutsContext";

const DeleteWorkout = ({ workoutId }) => {
  const {
    setTodaysWorkout,
    dates,
    setDates,
    highlightedDays,
    setHighlightedDays,
  } = useContext(WorkoutsContext);
  const axiosInterceptor = useInterceptor();

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInterceptor.delete(`/workouts/${workoutId}`);
      setTodaysWorkout(null);
      const updatedDates = dates.filter((date) => date !== response.data.date);
      const updatedHighlightedDays = highlightedDays.filter(
        (day) => day !== response.data.day
      );
      setDates(updatedDates);
      setHighlightedDays(updatedHighlightedDays);
      setIsLoading(false);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  return (
    <>
      <DeleteTextButton isLoading={isLoading} onClick={handleClick} />
    </>
  );
};

export default DeleteWorkout;
