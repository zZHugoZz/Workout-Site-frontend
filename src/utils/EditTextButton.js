import React from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import EditIcon from "@mui/icons-material/Edit";

const EditTextButton = ({ isLoading, onClick, size }) => {
  return (
    <>
      <LoadingButton
        variant="text"
        onClick={onClick}
        size={size || "medium"}
        color="inherit"
        startIcon={<EditIcon />}
        loading={isLoading}
        loadingPosition="start"
      >
        <span>Edit</span>
      </LoadingButton>
    </>
  );
};

export default EditTextButton;
