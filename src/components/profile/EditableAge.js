import React from "react";
import { useState, useEffect } from "react";
import useInterceptor from "../../utils/useInterceptor";

const EditableAge = () => {
  const [age, setAge] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const axiosInterceptor = useInterceptor();

  const handleAgeChange = (e) => {
    setAge(e.target.value);
    axiosInterceptor.put("/profiles", {
      age: e.target.value,
    });
  };

  useEffect(() => {
    axiosInterceptor.get("/profiles").then((response) => {
      setAge(response.data.age);
    });
  }, []);

  return (
    <>
      {isEditing ? (
        <div>
          <input
            type="number"
            placeholder="age..."
            value={age}
            onChange={handleAgeChange}
            min={1}
            max={100}
            autoFocus
          />
          <button onClick={() => setIsEditing(false)}>done</button>
        </div>
      ) : (
        <div>
          <h3>Age: {age}</h3>
          <button onClick={() => setIsEditing(true)}>modify</button>
        </div>
      )}
    </>
  );
};

export default EditableAge;
