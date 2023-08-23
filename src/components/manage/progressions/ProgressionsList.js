import React from "react";
import axios from "axios";

import useInterceptor from "../../../utils/useInterceptor";
import PerformancesList from "./PerformancesList";
import AddPerformanceForm from "./AddPerformanceForm";

const ProgressionsList = ({ progressions, unit, setProgressions }) => {
  const axiosInterceptor = useInterceptor();

  const handleDeleteProgression = async (id) => {
    await axiosInterceptor.delete(`/progressions/${id}`);
    const response = axios.get("/progressions", {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("authTokens")).access_token
        }`,
      },
    });
    setProgressions(response.data);
  };

  return (
    <>
      <ul>
        {progressions.map((progression) => (
          <li key={progression.id}>
            {progression.name}
            <PerformancesList progression={progression} unit={unit} />
            <AddPerformanceForm
              progressionId={progression.id}
              setProgressions={setProgressions}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProgressionsList;
