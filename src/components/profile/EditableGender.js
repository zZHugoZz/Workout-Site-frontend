import React from "react";
import { useState } from "react";
import useInterceptor from "../../utils/useInterceptor";

const EditableGender = ({ gender, setGender }) => {
  const [isEditing, setIsEditing] = useState(false);

  const axiosInterceptor = useInterceptor();

  const handleSubmitNewGender = async () => {
    await axiosInterceptor.put("/profiles", {
      gender: gender,
    });
    setIsEditing(false);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <>
      {isEditing ? (
        <div>
          <select value={gender} onChange={handleGenderChange}>
            <option value="other">other</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <button onClick={handleSubmitNewGender}>done</button>
        </div>
      ) : (
        <div>
          <h3>gender: {gender}</h3>
          <button onClick={() => setIsEditing(true)}>modify</button>
        </div>
      )}
    </>
  );
};

export default EditableGender;
