import React from "react";
import { useState } from "react";

const EditableGender = ({ profile }) => {
  const [gender, setGender] = useState(profile.gender);

  return (
    <>
      <h3>gender: {gender}</h3>
    </>
  );
};

export default EditableGender;
