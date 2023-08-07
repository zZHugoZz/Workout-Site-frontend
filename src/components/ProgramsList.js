import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

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
      <Grid
        container
        spacing={2}
        sx={{ marginLeft: "10px", marginRight: "10px" }}
      >
        {programs.map((program) => (
          <Grid xs={6}>
            <Paper
              key={program.id}
              sx={{
                padding: "5px",
                backgroundColor: "#f9ffdf",
              }}
              elevation={2}
            >
              <Divider>
                <Typography variant="h6">{program.name}</Typography>
              </Divider>
              <IconButton onClick={() => handleAccess(program.id)}>
                <OpenInFullIcon />
              </IconButton>
              <IconButton onClick={() => handleDelete(program.id)}>
                <RemoveIcon />
              </IconButton>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProgramsList;
