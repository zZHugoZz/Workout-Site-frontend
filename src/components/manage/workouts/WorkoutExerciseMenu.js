import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Stack from "@mui/material/Stack";

import DeleteWorkoutExerciseButton from "./DeleteWorkoutExerciseButton";
import EditWorkoutExerciseButton from "./EditWorkoutExerciseButton";

const WorkoutExerciseMenu = ({ exerciseId }) => {
  const [anchor, setAnchor] = useState(null);
  const isOpen = Boolean(anchor);

  return (
    <>
      <IconButton onClick={(e) => setAnchor(e.currentTarget)}>
        <MoreHorizIcon />
      </IconButton>
      <Menu
        open={isOpen}
        anchorEl={anchor}
        onClose={() => setAnchor(null)}
        disableScrollLock={true}
      >
        <Stack alignItems="start" padding="0 10px" spacing={1}>
          <DeleteWorkoutExerciseButton exerciseId={exerciseId} />
          <EditWorkoutExerciseButton />
        </Stack>
      </Menu>
    </>
  );
};

export default WorkoutExerciseMenu;
