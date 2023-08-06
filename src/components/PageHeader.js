import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditNoteIcon from "@mui/icons-material/EditNote";
import EggIcon from "@mui/icons-material/Egg";
import ExploreIcon from "@mui/icons-material/Explore";
import ForumIcon from "@mui/icons-material/Forum";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ExploreSearchBar from "./ExploreSearchBar";

const PageHeader = () => {
  const [pageName, setPageName] = useState("");
  const [icon, setIcon] = useState("");
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname;

    if (pathName.startsWith("/profile")) {
      setPageName("Profile");
      setIcon(<AccountCircleIcon />);
    } else if (pathName.startsWith("/manage")) {
      setPageName("Manage");
      setIcon(<EditNoteIcon />);
    } else if (pathName.startsWith("/nutrition")) {
      setPageName("Nutrition");
      setIcon(<EggIcon />);
    } else if (pathName.startsWith("/explore")) {
      setPageName("Explore");
      setIcon(<ExploreIcon />);
    } else if (pathName.startsWith("/community")) {
      setPageName("Community");
      setIcon(<ForumIcon />);
    }
  }, [location]);
  return (
    <>
      <Box sx={{ padding: "20px 50px", backgroundColor: "#dff1c2" }}>
        <Stack spacing={4} alignItems="center" direction="row">
          <Stack
            spacing={1}
            alignItems="center"
            direction="row"
            color="#285430"
          >
            <Typography variant="h5">{pageName}</Typography>
            {icon}
          </Stack>
          {pageName === "Explore" ? <ExploreSearchBar /> : <p></p>}
        </Stack>
      </Box>
    </>
  );
};

export default PageHeader;
