import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Grid from "@mui/material/Unstable_Grid2";

import useInterceptor from "../utils/useInterceptor";
import ProgramsPagination from "./ProgramsPagination";
import Program from "./Program";

const ProgramsList = () => {
  const [programs, setPrograms] = useState([]);

  const navigate = useNavigate();
  const axiosInterceptor = useInterceptor();

  const handleDelete = (id) => {
    axiosInterceptor.delete(`/programs/${id}`);
    axiosInterceptor.get("/programs").then((response) => {
      setPrograms(response.data);
    });
  };

  const handleAccess = (id) => {
    navigate(`programs/${id}`);
  };

  useEffect(() => {
    axiosInterceptor.get("/programs").then((response) => {
      setPrograms(response.data);
    });
  }, []);

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ marginLeft: "10px", marginRight: "10px" }}
      >
        {programs.map((program) => (
          <Program
            program={program}
            handleAccess={handleAccess}
            handleDelete={handleDelete}
          />
        ))}
      </Grid>
      <ProgramsPagination programs={programs} />
    </>
  );
};

export default ProgramsList;
