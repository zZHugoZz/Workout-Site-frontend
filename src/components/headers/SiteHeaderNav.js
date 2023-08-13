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

import { AuthContext } from "../../context/AuthContext";
import Settings from "./Settings";

const SiteHeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const matches = useMediaQuery("(max-width: 1010px)");
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
            <Stack spacing={6} alignItems="center">
              <Button
                variant="text"
                color="inherit"
                onClick={() => {
                  navigate("/profile");
                  setIsOpen(false);
                }}
              >
                Profile
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => {
                  navigate("/manage");
                  setIsOpen(false);
                }}
              >
                Manage
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => {
                  navigate("/nutrition");
                  setIsOpen(false);
                }}
              >
                Nutrition
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => {
                  navigate("/explore");
                  setIsOpen(false);
                }}
              >
                Explore
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => {
                  navigate("/community");
                  setIsOpen(false);
                }}
              >
                Community
              </Button>
              <Settings />
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
          <Settings />
          <IconButton color="inherit" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Stack>
      )}
    </>
  );
};

export default SiteHeaderNav;
