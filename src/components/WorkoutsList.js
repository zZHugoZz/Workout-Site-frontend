import React, { useState, useEffect } from "react";
import useInterceptor from "../utils/useInterceptor";
import { useNavigate } from "react-router-dom";
import { HoverButton } from "../styles/ButtonStyles";
import { StyledIconContainer } from "../styles/IconStyles";
import RemoveIcon from "@mui/icons-material/Remove";

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
            <HoverButton onClick={() => handleAccess(workout.id)}>
              {workout.date}
            </HoverButton>
            <HoverButton onClick={() => handleDelete(workout.id)}>
              <StyledIconContainer>
                <RemoveIcon style={{ color: "#E84444" }} />
              </StyledIconContainer>
            </HoverButton>
          </li>
        ))}
      </ul>
    </>
  );
};

export default WorkoutsList;
