import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import useInterceptor from "../utils/useInterceptor";

const ExploreSearchBar = () => {
  const axiosInterceptor = useInterceptor();

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axiosInterceptor.get("/exercises").then((response) => {
      setExercises(response.data);
    });
  }, []);

  useEffect(() => {
    console.table(exercises);
  }, [exercises]);

  return (
    <>
      <Autocomplete
        sx={{ width: 200 }}
        autoHighlight
        options={exercises}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search exercises..."
            variant="outlined"
            size="small"
            color="success"
          />
        )}
        renderOption={(props, option) => (
          <Link {...props} key={option.id} to={option.link}>
            {option.name}
          </Link>
        )}
      />
    </>
  );
};

export default ExploreSearchBar;
