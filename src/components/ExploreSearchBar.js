import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import ExploreResults from "./ExploreResults";
import { AuthContext } from "../context/AuthContext";
import { StyledSearchBar } from "../styles/InputStyles";

const ExploreSearchBar = () => {
  const [results, setResults] = useState([]);
  const { authTokens } = useContext(AuthContext);

  const handleChange = (e) => {
    console.log(authTokens.access_token);
    axios({
      method: "get",
      url: `/exercises/?q=${e.target.value}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens.access_token}`,
      },
    }).then((response) => {
      setResults(response.data);
      console.log("response: ", response.data);
    });
    // axios.get(`/exercises/?q=${e.target.value}`).then((response) => {
    //   setResults(response.data);
    //   console.log("response: ", response.data);
    // });
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
