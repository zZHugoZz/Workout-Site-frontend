import React, { useEffect, useState } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import Workouts from "../components/Workouts";
import Programs from "../components/Programs";
import Progression from "../components/Progression";
import OneRmCalculator from "../components/OneRmCalculator";
import useInterceptor from "../utils/useInterceptor";

const ManagePage = () => {
  const axiosInterceptor = useInterceptor();
  const [workouts, setWorkouts] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [progressions, setProgressions] = useState([]);

  useEffect(() => {
    axiosInterceptor.get("/manage").then((response) => {
      console.table(response.data);
      setWorkouts(response.data.workouts);
      setPrograms(response.data.programs);
      setProgressions(response.data.progressions);
    });
  }, []);

  return (
    <>
      <Container maxWidth="xl" sx={{ marginTop: "50px" }}>
        <Divider sx={{ marginBottom: "50px" }}>
          <Typography variant="h4">Overview</Typography>
        </Divider>
        <Grid container spacing={4}>
          <Grid xs={7}>
            <Card sx={{ backgroundColor: "#f5eeda", height: "350px" }}>
              {/* <Workouts /> */}
            </Card>
          </Grid>
          <Grid xs={5}>
            <Card sx={{ backgroundColor: "#f5eeda", height: "350px" }}>
              {/* <Programs /> */}
            </Card>
          </Grid>
          <Grid xs={3}>
            <Card sx={{ backgroundColor: "#f5eeda", height: "350px" }}>
              {/* <OneRmCalculator /> */}
            </Card>
          </Grid>
          <Grid xs={9}>
            <Card sx={{ backgroundColor: "#f5eeda", height: "350px" }}>
              {/* <Progression /> */}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ManagePage;
