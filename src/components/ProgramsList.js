import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import useInterceptor from "../utils/useInterceptor";

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
      <Stack direction="row">
        {programs.map((program) => (
          <Paper key={program.id} sx={{ minHeight: "200px" }} elevation={2}>
            {program.name}
            <button onClick={() => handleDelete(program.id)}>Delete</button>
            <button onClick={() => handleAccess(program.id)}>Access</button>
          </Paper>
        ))}
      </Stack>
    </>
  );
};

export default ProgramsList;
