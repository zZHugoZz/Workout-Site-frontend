import React, { useState } from "react";

import Menu from "@mui/material/Menu";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

import DeleteWorkoutExerciseSetButton from "./DeleteWorkoutExerciseSetButton";
import EditWorkoutExerciseSetButton from "./EditWorkoutExerciseSetButton";

const WorkoutExerciseSetMenu = ({ setId }) => {
  const [anchor, setAnchor] = useState(null);
  const isOpen = Boolean(anchor);

  return (
    <>
      <IconButton onClick={(e) => setAnchor(e.currentTarget)} size="small">
        <MoreHorizOutlinedIcon />
      </IconButton>
      <Menu open={isOpen} anchorEl={anchor} onClose={() => setAnchor(null)}>
        <Stack alignItems="start" spacing={1} padding="0 10px">
          <DeleteWorkoutExerciseSetButton setId={setId} />
          <EditWorkoutExerciseSetButton />
        </Stack>
      </Menu>
    </>
  );
};

export default WorkoutExerciseSetMenu;
