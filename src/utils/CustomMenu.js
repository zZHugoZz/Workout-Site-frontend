import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";

const CustomMenu = ({ children }) => {
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
        <Stack alignItems="start" spacing={1} padding="0 10px">
          {children}
        </Stack>
      </Menu>
    </>
  );
};

export default CustomMenu;