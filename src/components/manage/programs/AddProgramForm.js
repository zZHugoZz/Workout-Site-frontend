import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import useInterceptor from "../../../utils/useInterceptor";
import FormAddButton from "../../../utils/FormAddButton";

const menuItems = [
  "1 day",
  "2 days",
  "3 days",
  "4 days",
  "5 days",
  "6 days",
  "7 days",
  "8 days",
  "9 days",
  "10 days",
];

const AddProgramForm = () => {
  const axiosInterceptor = useInterceptor();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    n_days: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
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
      setIsLoading(false);
    } catch (err) {
      console.log("error: ", err);
    }
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
        <FormControl variant="outlined" color="success">
          <InputLabel>Number of days</InputLabel>
          <Select
            name="n_days"
            value={formData.n_days}
            onChange={handleChange}
            label="Number of days"
            required
          >
            {menuItems.map((item, i) => (
              <MenuItem value={i + 1} key={i}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormAddButton isLoading={isLoading}>Create</FormAddButton>
      </Stack>
    </>
  );
};

export default AddProgramForm;
