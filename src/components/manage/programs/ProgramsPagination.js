import React from "react";
import { useState, useEffect } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

import Pagination from "@mui/material/Pagination";
import usePagination from "../../../utils/pagination";
import Program from "./Program";

const ProgramsPagination = ({ programs, handleAccess, handleDelete }) => {
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

  useEffect(() => {
    console.log("current data: ", displayedData.currentData());
  }, [displayedData]);

  useEffect(() => {
    console.table(programs);
  }, [programs]);

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ marginLeft: "10px", marginRight: "10px", height: "200px" }}
      >
        {displayedData.currentData().map((program) => (
          <Program
            key={program.id}
            program={program}
            handleAccess={handleAccess}
            handleDelete={handleDelete}
          />
        ))}
      </Grid>
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

export default ProgramsPagination;
