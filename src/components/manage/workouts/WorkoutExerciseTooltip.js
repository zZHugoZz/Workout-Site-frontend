import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Stack from "@mui/material/Stack";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import DeleteWorkoutExerciseButton from "./DeleteWorkoutExerciseButton";
import EditWorkoutExercise from "./EditWorkoutExercise";
import { LightTooltip } from "../../../styles/LightTooltip";

const WorkoutExerciseTooltip = ({ exerciseId }) => {
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
                <EditWorkoutExercise />
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
