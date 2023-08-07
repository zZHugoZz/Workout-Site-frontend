import React from "react";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const AddProgramForm = () => {
  const handleSubmit = (e) => {};

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} paddingTop="10px">
        <TextField variant="outlined" required label="Name" />
      </Box>
    </>
  );
};

export default AddProgramForm;
