import React from "react";
import { useState } from "react";
import useInterceptor from "../utils/useInterceptor";

const AddPerformanceForm = ({ progressionId, setProgressions }) => {
  const [formData, setFormData] = useState({
    weight: "",
    date: "",
    progression_id: progressionId,
  });

  const axiosInterceptor = useInterceptor();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axiosInterceptor.post("/performances", formData);
    await axiosInterceptor.get("/progressions").then((response) => {
      setProgressions(response.data);
    });
    setFormData({
      weight: "",
      date: "",
      progression_id: progressionId,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="weight"
          value={formData.weight}
          placeholder="Weight..."
          onChange={handleChange}
          min="1"
          step="0.5"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          placeholder="Date..."
          onChange={handleChange}
          required
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default AddPerformanceForm;
