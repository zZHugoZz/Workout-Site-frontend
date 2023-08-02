import React from "react";

const EditableProfileData = ({ profile }) => {
  return (
    <>
      <h3>email: {profile.email}</h3>
      <h3>age: {profile.age}</h3>
      <h3>gender: {profile.gender}</h3>
    </>
  );
};

export default EditableProfileData;
