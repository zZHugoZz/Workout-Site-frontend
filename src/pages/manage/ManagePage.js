import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";

import Workouts from "../../components/manage/workouts/Workouts";
import WorkoutsProvider from "../../context/WorkoutsContext";
import Programs from "../../components/manage/programs/Programs";
import ProgramsProvider from "../../context/ProgramsContext";
import Progressions from "../../components/manage/progressions/Progressions";
import ProgressionsProvider from "../../context/ProgressionsContext";
import OneRmCalculator from "../../components/manage/oneRMcalculator/OneRmCalculator";
import useInterceptor from "../../utils/useInterceptor";
import PageContainer from "../../utils/PageContainer";
import { UnitContext } from "../../context/UnitContext";

const ManagePage = () => {
  const { setUnit } = useContext(UnitContext);
  const axiosInterceptor = useInterceptor();

  const [workoutsList, setWorkoutsList] = useState([]);
  const [programsList, setProgramsList] = useState([]);
  const [progressionsList, setProgressionsList] = useState([]);

  useEffect(() => {
    axiosInterceptor
      .get("/manage")
      .then((response) => {
        console.table(response.data);
        setWorkoutsList(response.data.workouts);
        setProgramsList(response.data.programs);
        setProgressionsList(response.data.progressions);
      })
      .then(
        axios
          .get("/units", {
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("authTokens")).access_token
              }`,
            },
          })
          .then((response) => {
            setUnit(response.data.unit);
          })
      );
  }, []);

  return (
    <>
      <PageContainer maxWidth="xl" pageName="Overview">
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
              <ProgressionsProvider>
                <Progressions progressionsList={progressionsList} />
              </ProgressionsProvider>
            </Card>
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
};

export default ManagePage;
