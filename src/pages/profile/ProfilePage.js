import React from "react";
import { useState, useEffect } from "react";
import useInterceptor from "../../utils/useInterceptor";

import EditableAge from "../../components/profile/EditableAge";
import EditableGender from "../../components/profile/EditableGender";

const ProfilePage = () => {
  const [profile, setProfile] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const axiosInterceptor = useInterceptor();

  useEffect(() => {
    axiosInterceptor.get("/profiles").then((response) => {
      setProfile(response.data);
      setUsername(response.data.user.username);
      setEmail(response.data.user.email);
      setAge(response.data.age);
      setGender(response.data.gender);
      console.log("response: ", response.data);
    });
  }, []);

  return (
    <>
      <h2>Profile</h2>
      <h3>profile picture: {profile.profile_picture}</h3>
      <h3>Hello {username}</h3>
      <h3>email: {email}</h3>
      <EditableAge age={age} setAge={setAge} />
      <EditableGender gender={gender} setGender={setGender} />
    </>
  );
};

export default ProfilePage;
