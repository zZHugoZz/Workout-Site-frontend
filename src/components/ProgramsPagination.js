import React from "react";
import { useState, useEffect } from "react";

import Pagination from "@mui/material/Pagination";
import usePagination from "../utils/pagination";

const ProgramsPagination = ({ programs }) => {
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
      <Pagination
        count={count}
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </>
  );
};

export default ProgramsPagination;
