import React, { useState, useContext } from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import useInterceptor from "../../../utils/useInterceptor";
import { ProgressionsContext } from "../../../context/ProgressionsContext";
import FormAddButton from "../../../utils/FormAddButton";

const AddProgressionForm = () => {
  const { progressions, setProgressions } = useContext(ProgressionsContext);
  const axiosInterceptor = useInterceptor();

  const [formData, setFormData] = useState({
    name: "",
    color: "#14FF63",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInterceptor.post("/progressions", formData);
      setProgressions([...progressions, response.data]);
      setFormData({
        name: "",
        color: "#14FF63",
      });
    } catch (err) {
      console.log("error in add progression post request: ", err);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Stack
        width="300px"
        component="form"
        onSubmit={handleSubmit}
        paddingTop="10px"
        spacing={3}
      >
        <TextField
          type="text"
          variant="outlined"
          label="Exercise"
          size="small"
          color="success"
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
          style={{ background: "black" }}
          required
        />
        <FormAddButton>Create</FormAddButton>
      </Stack>
    </>
  );
};

export default AddProgressionForm;
