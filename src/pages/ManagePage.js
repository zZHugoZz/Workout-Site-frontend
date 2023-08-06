import React from "react";

import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import Workouts from "../components/Workouts";
import Programs from "../components/Programs";
import Progression from "../components/Progression";
import OneRmCalculator from "../components/OneRmCalculator";

const ManagePage = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: "50px" }}>
        <Divider sx={{ marginBottom: "50px" }}>
          <Typography variant="h4">Overview</Typography>
        </Divider>
        <Grid container spacing={4}>
          <Grid xs={6}>
            <Card sx={{ backgroundColor: "#f5eeda", height: "350px" }}>
              <Workouts />
            </Card>
          </Grid>
          <Grid xs={6}>
            <Card sx={{ backgroundColor: "#f5eeda", height: "350px" }}>
              <Programs />
            </Card>
          </Grid>
          <Grid xs={12}>
            <Card sx={{ backgroundColor: "#f5eeda" }}>
              <Progression />
            </Card>
          </Grid>
          <Grid xs={6}>
            <Card sx={{ backgroundColor: "#f5eeda" }}>
              <OneRmCalculator />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ManagePage;
