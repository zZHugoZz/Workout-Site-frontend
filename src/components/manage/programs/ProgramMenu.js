import React from "react";

import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";

const ProgramMenu = () => {
  return (
    <>
      <IconButton>
        <MoreHorizIcon />
      </IconButton>
      <Menu>
        <Stack></Stack>
      </Menu>
    </>
  );
};

export default ProgramMenu;
