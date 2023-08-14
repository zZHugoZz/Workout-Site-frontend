import React from "react";

import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const PageContainer = ({ children, maxWidth, pageName }) => {
  return (
    <>
      <Container
        maxWidth={maxWidth}
        sx={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <Divider sx={{ marginBottom: "50px" }}>
          <Typography variant="h4">{pageName}</Typography>
        </Divider>
        {children}
      </Container>
    </>
  );
};

export default PageContainer;
