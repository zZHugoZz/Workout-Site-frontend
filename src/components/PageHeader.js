import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditNoteIcon from "@mui/icons-material/EditNote";
import EggIcon from "@mui/icons-material/Egg";
import ExploreIcon from "@mui/icons-material/Explore";
import ForumIcon from "@mui/icons-material/Forum";
import { StyledPageHeader } from "../styles/HeaderStyles";
import { StyledIconContainer } from "../styles/IconStyles";

const PageHeader = () => {
  const [PageName, setPageName] = useState("");
  const [icon, setIcon] = useState("");
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname;

    if (pathName.startsWith("/profile/")) {
      setPageName("Profile");
      setIcon(<AccountCircleIcon />);
    } else if (pathName.startsWith("/manage/")) {
      setPageName("Manage");
      setIcon(<EditNoteIcon />);
    } else if (pathName.startsWith("/nutrition/")) {
      setPageName("Nutrition");
      setIcon(<EggIcon />);
    } else if (pathName.startsWith("/explore/")) {
      setPageName("Explore");
      setIcon(<ExploreIcon />);
    } else if (pathName.startsWith("/community/")) {
      setPageName("Community");
      setIcon(<ForumIcon />);
    }
  }, [location]);
  return (
    <>
      <StyledPageHeader>
        <div>
          <span
            style={{
              fontSize: "25px",
              fontWeight: "700",
              lineHeight: "23px",
              marginRight: "10px",
            }}
          >
            {PageName}
          </span>
          <StyledIconContainer>{icon}</StyledIconContainer>
        </div>
      </StyledPageHeader>
    </>
  );
};

export default PageHeader;
