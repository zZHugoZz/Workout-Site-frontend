import React from "react";
import { useState } from "react";
import useInterceptor from "../../utils/useInterceptor";

const EditableAge = ({ age, setAge, gender }) => {
  const [isEditing, setIsEditing] = useState(false);

  const axiosInterceptor = useInterceptor();

  const handleSubmitNewAge = async () => {
    await axiosInterceptor.put("/profiles", {
      age: age,
      gender: gender,
    });
    setIsEditing(false);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

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
          <button onClick={handleSubmitNewAge}>done</button>
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
