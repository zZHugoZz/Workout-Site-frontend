import React, { useContext } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

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
                <Divider></Divider>
                <CustomMenu>
                  <DeleteProgramDayButton dayId={day.id} />
                </CustomMenu>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
      <section>
        <AddDay />
      </section>
    </>
  );
};

export default ProgramDaysList;
