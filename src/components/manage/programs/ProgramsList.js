import React from "react";
import { useState, useEffect, useContext } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Pagination from "@mui/material/Pagination";
import usePagination from "../../../utils/pagination";
import Program from "./Program";
import { ProgramsContext } from "../../../context/ProgramsContext";

const ProgramsList = () => {
  const { programs } = useContext(ProgramsContext);

  const [count, setCount] = useState(10);
  const [page, setPage] = useState(1);
  const perPage = 4;

  const displayedData = usePagination(programs, perPage);

  const handleChange = (e, page) => {
    setPage(page);
    displayedData.jump(page);
  };

  useEffect(() => {
    setCount(Math.ceil(programs.length / perPage));
  }, [programs]);

  return (
    <>
      {programs.length === 0 ? (
        <Stack alignItems="center" height="184px">
          <Typography variant="body2">You don't have any programs</Typography>
        </Stack>
      ) : (
        <Grid
          container
          spacing={2}
          sx={{ marginLeft: "10px", marginRight: "10px", height: "200px" }}
        >
          {displayedData.currentData().map((program) => (
            <Program key={program.id} program={program} />
          ))}
        </Grid>
      )}

      <Divider sx={{ paddingTop: "20px" }} />
      <Container>
        <Pagination
          count={count}
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          sx={{ paddingTop: "20px" }}
        />
      </Container>
    </>
  );
};

export default ProgramsList;
