import React, { useEffect, useState } from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";

import useInterceptor from "../../utils/useInterceptor";

const EditableProfilePic = ({ profilePic, setProfilePic }) => {
  const axiosInterceptor = useInterceptor();

  const handleCreateProfilePic = async (e) => {
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

  const handleChangeProfilePic = async (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const formData = new FormData();
      formData.append("file_in", selectedFile);

      try {
        const response = await axiosInterceptor.put(
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

  return (
    <>
      {profilePic ? (
        <Box>
          <input
            type="file"
            accept="image/jpeg"
            id="change-profile-pic"
            multiple
            style={{ display: "none", width: 150, height: 150 }}
            onChange={handleChangeProfilePic}
          />
          <label htmlFor="change-profile-pic">
            <Avatar
              src={profilePic}
              sx={{
                width: 150,
                height: 150,
                ":hover": {
                  cursor: "pointer",
                },
              }}
              component="span"
            />
          </label>
        </Box>
      ) : (
        <Box>
          <input
            type="file"
            accept="image/jpeg"
            id="create-profile-pic"
            multiple
            style={{ display: "none", width: 150, height: 150 }}
            onChange={handleCreateProfilePic}
          />
          <label htmlFor="create-profile-pic">
            <Avatar
              sx={{
                width: 150,
                height: 150,
                ":hover": {
                  cursor: "pointer",
                },
              }}
              component="span"
            >
              <PersonIcon sx={{ width: 100, height: 100 }} />
            </Avatar>
          </label>
        </Box>
      )}
    </>
  );
};

export default EditableProfilePic;
