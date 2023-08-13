import React from "react";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const CardTitle = ({ children }) => {
  return (
    <>
      <Divider
        textAlign="left"
        sx={{ marginTop: "10px", marginBottom: "15px" }}
      >
        <Typography variant="h5">{children}</Typography>
      </Divider>
    </>
  );
};

export default CardTitle;
