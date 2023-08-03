import React from "react";
import { useState, useEffect } from "react";
import useInterceptor from "../utils/useInterceptor";

const EditableGender = ({ profile }) => {
  const [gender, setGender] = useState("");

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
      <div>
        <h3>gender: </h3>
        <select value={gender} onChange={handleGenderChange}>
          <option value="other">other</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </div>
    </>
  );
};

export default EditableGender;
