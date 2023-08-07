import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import useInterceptor from "../utils/useInterceptor";

const menuItems = [
  "1 day",
  "2 days",
  "3days",
  "4 days",
  "5 days",
  "6 days",
  "7 days",
  "8 days",
  "9 days",
  "10 days",
];

const AddProgramForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    n_days: "",
  });

  const axiosInterceptor = useInterceptor();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInterceptor.post("/programs", formData).then((response) => {
      for (let i = 1; i <= formData.n_days; i++) {
        axiosInterceptor.post("/program_days", {
          program_id: response.data.id,
        });
      }
      navigate(`programs/${response.data.id}`);
    });
    setFormData({
      name: "",
      description: "",
      n_days: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          variant="outlined"
          label="Name"
          size="small"
          color="success"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          variant="outlined"
          label="Description"
          size="small"
          multiline
          rows={4}
          color="success"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <FormControl>
          <InputLabel>Number of days</InputLabel>
          <Select
            name="n_days"
            value={formData.n_days}
            onChange={handleChange}
            variant="filled"
            required
          >
            {menuItems.map((item, i) => (
              <MenuItem value={i + 1}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="outlined" type="submit">
          Create
        </Button>
      </Stack>
    </>
  );
};

export default AddProgramForm;
