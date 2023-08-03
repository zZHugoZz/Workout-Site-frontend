import React from "react";
import { useState } from "react";

const EditableProfileInfo = ({ profile }) => {
  const [age, setAge] = useState(profile.age);
  const [gender, setGender] = useState(profile.gender);

  return (
    <>
      <span>
        <h3>age: {age}</h3>
      </span>
      <span>
        <h3>gender: {gender}</h3>
      </span>
    </>
  );
};

export default EditableProfileInfo;
