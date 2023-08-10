import React, { useState, useContext } from "react";
import axios from "axios";

import LoadingButton from "@mui/lab/LoadingButton";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import { styled } from "@mui/material/styles";

import useInterceptor from "../../../utils/useInterceptor";
import { WorkoutContext } from "../../../context/WorkoutContext";

const DeleteWorkoutExerciseButton = ({ exerciseId }) => {
  const { workoutId, setExercises } = useContext(WorkoutContext);
  const axiosInterceptor = useInterceptor();

  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  const handleDeleteWorkoutExercise = async (id) => {
    try {
      setIsLoading(true);
      await axiosInterceptor.delete(`/workout_exercises/${id}`);
      const response = await axios.get(`/workouts/${workoutId}`, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("authTokens")).access_token
          }`,
          "Content-Type": "application/json",
        },
      });
      setExercises(response.data.exercises);
      setIsLoading(false);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  return (
    <>
      <ClickAwayListener onClickAway={() => setIsOpen(false)}>
        <div>
          <LightTooltip
            placement="bottom-start"
            open={isOpen}
            title={
              <Stack alignItems="start" spacing={1}>
                <LoadingButton
                  variant="text"
                  color="error"
                  startIcon={<DeleteForeverIcon />}
                  loading={isLoading}
                  loadingPosition="start"
                  onClick={() => handleDeleteWorkoutExercise(exerciseId)}
                >
                  Delete
                </LoadingButton>
                <LoadingButton
                  variant="text"
                  color="inherit"
                  startIcon={<EditIcon />}
                  loading={isLoading}
                  loadingPosition="start"
                >
                  Edit
                </LoadingButton>
              </Stack>
            }
          >
            <IconButton onClick={() => setIsOpen(true)}>
              <MoreHorizIcon />
            </IconButton>
          </LightTooltip>
        </div>
      </ClickAwayListener>
    </>
  );
};

export default DeleteWorkoutExerciseButton;
