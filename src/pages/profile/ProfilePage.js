import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import useInterceptor from "../../utils/useInterceptor";

import EditableProfilePic from "../../components/profile/EditableProfilePic";
import EditableAge from "../../components/profile/EditableAge";
import EditableGender from "../../components/profile/EditableGender";

const ProfilePage = () => {
  const [profile, setProfile] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const axiosInterceptor = useInterceptor();

  useEffect(() => {
    axiosInterceptor
      .get("/profiles")
      .then((response) => {
        setProfile(response.data);
        setUsername(response.data.user.username);
        setEmail(response.data.user.email);
        setAge(response.data.age);
        setGender(response.data.gender);
        axios
          .get("/profile_pictures", {
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("authTokens")).access_token
              }`,
            },
            responseType: "blob",
          })
          .then((response) => {
            const imageUrl = URL.createObjectURL(response.data);
            setProfilePic(imageUrl);
          })
          .catch((err) => {
            console.log("error during profile picture fetching: ", err);
          });
      })
      .catch((err) => {
        console.log("error during profile fetching: ", err);
      });
  }, []);

  return (
    <>
      <h2>Profile</h2>
      <EditableProfilePic
        profilePic={profilePic}
        setProfilePic={setProfilePic}
      />
      <h3>Hello {username}</h3>
      <h3>email: {email}</h3>
      <EditableAge age={age} setAge={setAge} />
      <EditableGender gender={gender} setGender={setGender} />
    </>
  );
};

export default ProfilePage;
