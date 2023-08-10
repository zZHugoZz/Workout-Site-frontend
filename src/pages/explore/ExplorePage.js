import React from "react";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import {
  overview,
  backContent,
  pecsContent,
  shouldersContent,
  armsContent,
  absContent,
  legsContent,
} from "../../components/explore/ExplorePageContent";

const ExplorePage = () => {
  return (
    <>
      <Container maxWidth="md" sx={{ marginTop: "50px" }}>
        {overview}
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
