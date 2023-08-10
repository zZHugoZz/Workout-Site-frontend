import React from "react";
import { useState, useEffect } from "react";
import useInterceptor from "../../utils/useInterceptor";

import EditableAge from "../../components/profile/EditableAge";
import EditableGender from "../../components/profile/EditableGender";

const ProfilePage = () => {
  const [profile, setProfile] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const axiosInterceptor = useInterceptor();

  useEffect(() => {
    axiosInterceptor.get("/profiles").then((response) => {
      setProfile(response.data);
      setUsername(response.data.user.username);
      setEmail(response.data.user.email);
    });
  }, []);

  return (
    <>
      <h2>Profile</h2>
      <h3>profile picture: {profile.profile_picture}</h3>
      <h3>Hello {username}</h3>
      <h3>email: {email}</h3>
      <EditableAge />
      <EditableGender />
    </>
  );
};

export default ProfilePage;
