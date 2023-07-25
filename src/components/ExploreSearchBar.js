import React from "react";
import { useState } from "react";
import ExploreResults from "./ExploreResults";
import { StyledSearchBar } from "../styles/InputStyles";
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
      <StyledSearchBar
        type="text"
        placeholder="Search exercises..."
        onChange={handleChange}
      />
      <ExploreResults results={results} />
    </>
  );
};

export default ExploreSearchBar;
