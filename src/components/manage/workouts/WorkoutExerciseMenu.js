import React from "react";

import DeleteWorkoutExerciseButton from "./DeleteWorkoutExerciseButton";
import EditWorkoutExerciseButton from "./EditWorkoutExerciseButton";
import CustomMenu from "../../../utils/CustomMenu";

const WorkoutExerciseMenu = ({ exerciseId }) => {
  return (
    <>
      <CustomMenu>
        <DeleteWorkoutExerciseButton exerciseId={exerciseId} />
        <EditWorkoutExerciseButton />
      </CustomMenu>
    </>
  );
};

export default WorkoutExerciseMenu;
