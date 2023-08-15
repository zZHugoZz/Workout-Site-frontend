import React, { useState, useContext } from "react";

import IconButton from "@mui/material/IconButton";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

import AddWorkoutExerciseSetForm from "./AddWorkoutExerciseSetForm";
import CustomDialog from "../../../utils/CustomDialog";
import { WorkoutContext } from "../../../context/WorkoutContext";

const AddWorkoutExerciseSet = ({ exerciseId }) => {
  const { setExerciseId } = useContext(WorkoutContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton
        title="Add set"
        onClick={() => {
          setExerciseId(exerciseId);
          setIsOpen(true);
        }}
      >
        <AddCircleOutlinedIcon htmlColor="green" />
      </IconButton>
      <CustomDialog title="Add set" isOpen={isOpen} setIsOpen={setIsOpen}>
        <AddWorkoutExerciseSetForm />
      </CustomDialog>
    </>
  );
};

export default AddWorkoutExerciseSet;
