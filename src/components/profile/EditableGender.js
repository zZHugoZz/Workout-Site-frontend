import React from "react";
import { useState, useEffect } from "react";
import useInterceptor from "../../utils/useInterceptor";

const EditableGender = () => {
  const [gender, setGender] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const axiosInterceptor = useInterceptor();

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    axiosInterceptor.put("/profiles", {
      gender: e.target.value,
    });
  };

  useEffect(() => {
    axiosInterceptor.get("/profiles").then((response) => {
      setGender(response.data.gender);
    });
  }, []);

  return (
    <>
      {isEditing ? (
        <div>
          <select value={gender} onChange={handleGenderChange}>
            <option value="other">other</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <button onClick={() => setIsEditing(false)}>done</button>
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
