import React, { useContext } from "react";

import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

import { WorkoutsContext } from "../../../context/WorkoutsContext";

const AddWorkout = () => {
  const { handleAddWorkout } = useContext(WorkoutsContext);

  return (
    <>
      <IconButton
        onClick={handleAddWorkout}
        title="Add new workout"
        sx={{ width: "max-content" }}
      >
        <AddIcon sx={{ color: "green" }} />
      </IconButton>
    </>
  );
};

export default AddWorkout;
