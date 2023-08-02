import React from "react";
import { useState, useEffect } from "react";
import useInterceptor from "../utils/useInterceptor";
import EditableAge from "../components/EditableAge";
import EditableGender from "../components/EditableGender";

const ProfilePage = () => {
  const [profile, setProfile] = useState({});

  const axiosInterceptor = useInterceptor();

  useEffect(() => {
    axiosInterceptor.get("/profiles").then((response) => {
      setProfile(response.data);
    });
  }, []);

  return (
    <>
      <h2>Profile</h2>
      <h3>profile picture: {profile.profile_picture}</h3>
      <h3>Hello {profile.username}</h3>
      <h3>email: {profile.email}</h3>
      <EditableAge profile={profile} />
      <EditableGender profile={profile} />
    </>
  );
};

export default ProfilePage;
