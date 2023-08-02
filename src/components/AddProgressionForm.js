import React from "react";
import { useState } from "react";
import useInterceptor from "../utils/useInterceptor";

const AddProgressionForm = ({ setProgressions }) => {
  const [formData, setFormData] = useState({
    name: "",
    color: "#FF7543",
  });

  const axiosInterceptor = useInterceptor();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axiosInterceptor.post("/progressions", formData);
    await axiosInterceptor.get("/progressions").then((response) => {
      setProgressions(response.data);
    });
    setFormData({
      name: "",
      color: "#FF7543",
    });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Exercise..."
          onChange={handleChange}
          name="name"
          value={formData.name}
          required
        />
        <input
          type="color"
          onChange={handleChange}
          name="color"
          value={formData.color}
          required
        />
        <button>Create</button>
      </form>
    </>
  );
};

export default AddProgressionForm;
