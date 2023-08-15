import React, { useContext } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

import ProgramExerciseList from "./ProgramExerciseList";
import AddDay from "./AddDay";
import { ProgramContext } from "../../../context/ProgramContext";
import CardTitle from "../../../utils/CardTitle";
import CustomMenu from "../../../utils/CustomMenu";
import DeleteProgramDayButton from "./DeleteProgramDayButton";

const ProgramDaysList = () => {
  const { days } = useContext(ProgramContext);

  return (
    <>
      <Grid container spacing={4}>
        {days.map((day, i) => (
          <Grid xs={6} key={day.id}>
            <Card sx={{ backgroundColor: "#f5eeda", height: "350px" }}>
              <CardTitle>Day {i + 1}</CardTitle>
              <Stack
                spacing={1.5}
                sx={{
                  padding: "0 20px",
                }}
              >
                <ProgramExerciseList day={day} />
                <Divider sx={{ maxWidth: "505px" }}></Divider>
                <CustomMenu>
                  <DeleteProgramDayButton dayId={day.id} />
                </CustomMenu>
              </Stack>
            </Card>
          </Grid>
        ))}
        <Grid xs={6}>
          <Card sx={{ height: "350px", backgroundColor: "#cfffd7" }}>
            <CardTitle titleColor="#176717">Add day</CardTitle>
            <Box
              component={Stack}
              justifyContent="center"
              alignItems="center"
              height="250px"
              direction="row"
            >
              <AddDay />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ProgramDaysList;
