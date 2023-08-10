import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import RemoveIcon from "@mui/icons-material/Remove";

import { WorkoutsContext } from "../../../context/WorkoutsContext";

const WorkoutsList = () => {
  const navigate = useNavigate();
  const { handleDelete, workouts } = useContext(WorkoutsContext);

  const handleAccess = (id) => {
    navigate(`workouts/${id}`);
  };

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
