import React from "react";
import ExploreSearchBar from "../components/ExploreSearchBar";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const ExplorePage = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Stack direction="row" justifyContent="center">
          <Typography variant="h4">Overview</Typography>
          <ExploreSearchBar />
        </Stack>
      </Container>
    </>
  );
};

export default ExplorePage;
