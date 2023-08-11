import React, { useState } from "react";

import Menu from "@mui/material/Menu";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

import DeleteWorkoutExerciseSetButton from "./DeleteWorkoutExerciseSetButton";

const WorkoutExerciseSetMenu = ({ setId }) => {
  const [anchor, setAnchor] = useState(null);
  const isOpen = Boolean(anchor);

  return (
    <>
      <IconButton onClick={(e) => setAnchor(e.currentTarget)}>
        <MoreHorizOutlinedIcon />
      </IconButton>
      <Menu open={isOpen} anchorEl={anchor} onClose={() => setAnchor(null)}>
        <Stack alignItems="start" spacing={1}>
          <DeleteWorkoutExerciseSetButton setId={setId} />
        </Stack>
      </Menu>
    </>
  );
};

export default WorkoutExerciseSetMenu;
