import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";

import { AuthContext } from "../context/AuthContext";

const SiteHeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const matches = useMediaQuery("(max-width: 930px)");
  const { handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      {matches ? (
        <Box>
          <IconButton color="inherit" onClick={() => setIsOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer open={isOpen} onClose={() => setIsOpen(false)} anchor="right">
            <Stack spacing={6}>
              <Button
                variant="text"
                color="inherit"
                onClick={() => navigate("/profile")}
              >
                Profile
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => navigate("/manage")}
              >
                Manage
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => navigate("/nutrition")}
              >
                Nutrition
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => navigate("/explore")}
              >
                Explore
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => navigate("/community")}
              >
                Community
              </Button>
              <Button variant="text" color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </Stack>
          </Drawer>
        </Box>
      ) : (
        <Stack spacing={6} direction="row">
          <Button
            variant="text"
            color="inherit"
            onClick={() => navigate("/profile")}
          >
            Profile
          </Button>

          <Button
            variant="text"
            color="inherit"
            onClick={() => navigate("/manage")}
          >
            Manage
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => navigate("/nutrition")}
          >
            Nutrition
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => navigate("/explore")}
          >
            Explore
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => navigate("/community")}
          >
            Community
          </Button>
          <IconButton color="inherit" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Stack>
      )}
    </>
  );
};

export default SiteHeaderNav;
