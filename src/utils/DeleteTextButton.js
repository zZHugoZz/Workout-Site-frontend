import React from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const DeleteTextButton = ({ isLoading, onClick, size }) => {
  return (
    <>
      <LoadingButton
        onClick={onClick}
        size={size || "medium"}
        variant="text"
        color="error"
        loading={isLoading}
        loadingPosition="start"
        startIcon={<DeleteForeverIcon />}
      >
        <span>Delete</span>
      </LoadingButton>
    </>
  );
};

export default DeleteTextButton;
