import React from "react";
// import ExploreSearchBar from "../components/ExploreSearchBar";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import {
  overview,
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
        {overview}
        {/* <ExploreSearchBar /> */}
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
