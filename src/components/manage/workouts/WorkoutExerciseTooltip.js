import React, { useState, useContext } from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import DeleteWorkoutExerciseButton from "./DeleteWorkoutExerciseButton";
import { LightTooltip } from "../../../styles/LightTooltip";

const WorkoutExerciseTooltip = ({ exerciseId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
