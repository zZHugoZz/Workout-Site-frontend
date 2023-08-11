import React from "react";

import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";

import AccessProgramButton from "./AccessProgramButton";
import DeleteProgramButton from "./DeleteProgramButton";

const ProgramMenu = ({ programId }) => {
  return (
    <>
      <IconButton>
        <MoreHorizIcon />
      </IconButton>
      <Menu>
        <Stack>
          <AccessProgramButton programId={programId} />
          <DeleteProgramButton programId={programId} />
        </Stack>
      </Menu>
    </>
  );
};

export default ProgramMenu;
