import React from "react";
import ExploreSearchBar from "../components/ExploreSearchBar";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import {
  backContent,
  pecsContent,
  shouldersContent,
  armsContent,
  absContent,
  legsContent,
} from "../components/ExplorePageContent";

const ExplorePage = () => {
  return (
    <>
      <Container maxWidth="md" sx={{ marginTop: "50px" }}>
        <Stack
          direction="row"
          justifyContent="center"
          sx={{ marginBottom: "50px" }}
        >
          <Typography variant="h4">Overview</Typography>
          <ExploreSearchBar />
        </Stack>
        <Stack spacing={5}>
          {backContent}
          {pecsContent}
          {shouldersContent}
          {armsContent}
          {absContent}
          {legsContent}
        </Stack>
      </Container>
    </>
  );
};

export default ExplorePage;
