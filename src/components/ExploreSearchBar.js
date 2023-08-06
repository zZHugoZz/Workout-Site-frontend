import React from "react";
import { useState } from "react";

import TextField from "@mui/material/TextField";

import ExploreResults from "./ExploreResults";
import useInterceptor from "../utils/useInterceptor";

const ExploreSearchBar = () => {
  const [results, setResults] = useState([]);

  const axiosInterceptor = useInterceptor();

  const handleChange = (e) => {
    axiosInterceptor.get(`/exercises/?q=${e.target.value}`).then((response) => {
      setResults(response.data);
      console.log("response: ", response.data);
    });
  };

  return (
    <>
      <TextField
        label="Search exercises..."
        type="search"
        variant="outlined"
        onChange={handleChange}
        size="small"
        color="success"
      />
      <ExploreResults results={results} />
    </>
  );
};

export default ExploreSearchBar;
