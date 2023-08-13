import React from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import AddIcon from "@mui/icons-material/Add";

const FormAddButton = ({ children, isLoading }) => {
  return (
    <>
      <LoadingButton
        loading={isLoading}
        type="submit"
        loadingPosition="start"
        startIcon={<AddIcon />}
        variant="outlined"
        sx={{ width: "max-content" }}
        color="success"
      >
        <span>{children}</span>
      </LoadingButton>
    </>
  );
};

export default FormAddButton;
