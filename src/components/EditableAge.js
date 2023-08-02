import React from "react";
import { useState } from "react";

const EditableAge = ({ profile }) => {
  const [age, setAge] = useState(profile.age);

  return (
    <>
      <h3>age: {age}</h3>
    </>
  );
};

export default EditableAge;
