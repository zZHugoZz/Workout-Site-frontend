import React from "react";
import { useNavigate } from "react-router-dom";

import AccessTextButton from "../../../utils/AccessTextButton";

const AccessWorkout = ({ workoutId }) => {
  const navigate = useNavigate();

  return (
    <>
      <AccessTextButton onClick={() => navigate(`workouts/${workoutId}`)} />
    </>
  );
};

export default AccessWorkout;
