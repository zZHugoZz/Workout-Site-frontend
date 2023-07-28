import React from "react";
import { useState } from "react";
import useInterceptor from "../utils/useInterceptor";

const AddProgramExerciseForm = ({ dayId, setDays, programId }) => {
  const [formData, setFormData] = useState({
    name: "",
    min_sets: "",
    max_sets: "",
    min_reps: "",
    max_reps: "",
    day_id: dayId,
  });

  const axiosInterceptor = useInterceptor();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axiosInterceptor.post("/program_exercises", formData);
    axiosInterceptor.get(`/programs/${programId}`).then((response) => {
      setDays(response.data.days);
    });
    setFormData({
      name: "",
      min_sets: "",
      max_sets: "",
      min_reps: "",
      max_reps: "",
      day_id: dayId,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Exercise..."
        />
        <input
          type="number"
          min={1}
          name="min_sets"
          value={formData.min_sets}
          onChange={handleChange}
          required
          placeholder="Min sets..."
        />
        <input
          type="number"
          min={1}
          name="max_sets"
          value={formData.max_sets}
          onChange={handleChange}
          required
          placeholder="Max sets..."
        />
        <input
          type="number"
          min={1}
          name="min_reps"
          value={formData.min_reps}
          onChange={handleChange}
          required
          placeholder="Min reps..."
        />
        <input
          type="number"
          min={1}
          name="max_reps"
          value={formData.max_reps}
          onChange={handleChange}
          required
          placeholder="Max reps..."
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default AddProgramExerciseForm;
