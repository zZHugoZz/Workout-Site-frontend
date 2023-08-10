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

import DeleteWorkoutExerciseButton from "./DeleteWorkoutExerciseButton";

const WorkoutExerciseTooltip = ({ exerciseId }) => {
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

  return (
    <>
      <ClickAwayListener onClickAway={() => setIsOpen(false)}>
        <div>
          <LightTooltip
            placement="bottom-start"
            open={isOpen}
            title={
              <Stack alignItems="start" spacing={1}>
                <DeleteWorkoutExerciseButton exerciseId={exerciseId} />
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

export default WorkoutExerciseTooltip;
