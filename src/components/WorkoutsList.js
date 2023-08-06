import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

import Badge from "@mui/material/Badge";
import RemoveIcon from "@mui/icons-material/Remove";
import LocalizationProvider from "@mui/x-date-pickers/LocalizationProvider";
import PickersDay from "@mui/x-date-pickers/PickersDay";
import DateCalendar from "@mui/x-date-pickers/DateCalendar";

import useInterceptor from "../utils/useInterceptor";

const WorkoutsList = () => {
  const [workouts, setWorkouts] = useState([]);

  const navigate = useNavigate();
  const axiosInterceptor = useInterceptor();

  const handleDelete = (id) => {
    axiosInterceptor.delete(`/workouts/${id}`);
    axiosInterceptor.get("/workouts").then((response) => {
      setWorkouts(response.data);
    });
  };

  const handleAccess = (id) => {
    navigate(`workouts/${id}`);
  };

  useEffect(() => {
    axiosInterceptor.get("/workouts").then((response) => {
      setWorkouts(response.data);
    });
  }, []);

  return (
    <>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>
            <button onClick={() => handleAccess(workout.id)}>
              {workout.date}
            </button>
            <button onClick={() => handleDelete(workout.id)}>
              <RemoveIcon style={{ color: "#E84444" }} />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default WorkoutsList;
