import React, { useEffect, useState } from "react";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";

import useInterceptor from "../../utils/useInterceptor";

const EditableProfilePic = ({ profilePic, setProfilePic }) => {
  const axiosInterceptor = useInterceptor();

  const [isHovered, setIsHovered] = useState(false);

  const handleChange = async (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const formData = new FormData();
      formData.append("file_in", selectedFile);

      try {
        const response = await axiosInterceptor.post(
          "/profile_pictures",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("response: ", response.data);
      } catch (err) {
        console.error("error uploading file: ", err);
      }
    }
  };

  useEffect(() => {
    console.log("hover: ", isHovered);
  }, [isHovered]);

  return (
    <>
      {profilePic ? (
        <Avatar src={profilePic} sx={{ width: 150, height: 150 }} />
      ) : (
        <Box>
          <input
            type="file"
            accept="image/jpeg"
            id="upload-file"
            multiple
            style={{ display: "none", width: 150, height: 150 }}
            onChange={handleChange}
          />
          <Avatar
            sx={{ width: 150, height: 150 }}
            component="div"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? (
              <label htmlFor="upload-file">
                <IconButton
                  sx={{
                    width: 150,
                    height: 150,
                  }}
                  component="span"
                >
                  <AddIcon sx={{ width: 75, height: 75 }} />
                </IconButton>
              </label>
            ) : (
              <PersonIcon sx={{ width: 100, height: 100 }} />
            )}
          </Avatar>
        </Box>
      )}
    </>
  );
};

export default EditableProfilePic;
