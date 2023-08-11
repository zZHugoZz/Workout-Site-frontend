import React, { useEffect, useState, useContext } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import Workouts from "../../components/manage/workouts/Workouts";
import Programs from "../../components/manage/programs/Programs";
import Progression from "../../components/manage/progressions/Progression";
import OneRmCalculator from "../../components/manage/oneRMcalculator/OneRmCalculator";
import useInterceptor from "../../utils/useInterceptor";
import WorkoutsProvider from "../../context/WorkoutsContext";
import ProgramsProvider from "../../context/ProgramsContext";
import { UnitContext } from "../../context/UnitContext";

const ManagePage = () => {
  const { setUnit } = useContext(UnitContext);
  const axiosInterceptor = useInterceptor();

  const [workoutsList, setWorkoutsList] = useState([]);
  const [programsList, setProgramsList] = useState([]);
  const [progressions, setProgressions] = useState([]);

  useEffect(() => {
    axiosInterceptor.get("/manage").then((response) => {
      console.table(response.data);
      setWorkoutsList(response.data.workouts);
      setProgramsList(response.data.programs);
      setProgressions(response.data.progressions);
      setUnit(response.data.unit);
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
              <WorkoutsProvider>
                <Workouts workoutsList={workoutsList} />
              </WorkoutsProvider>
            </Card>
          </Grid>
          <Grid xs={5}>
            <Card sx={{ backgroundColor: "#f5eeda", height: "350px" }}>
              <ProgramsProvider>
                <Programs programsList={programsList} />
              </ProgramsProvider>
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
