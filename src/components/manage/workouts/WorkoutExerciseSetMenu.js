import React from "react";

import DeleteWorkoutExerciseSetButton from "./DeleteWorkoutExerciseSetButton";
import EditWorkoutExerciseSetButton from "./EditWorkoutExerciseSetButton";
import CustomMenu from "../../../utils/CustomMenu";

const WorkoutExerciseSetMenu = ({ setId }) => {
  return (
    <>
      <CustomMenu>
        <EditWorkoutExerciseSetButton />
        <DeleteWorkoutExerciseSetButton setId={setId} />
      </CustomMenu>
    </>
  );
};

export default WorkoutExerciseSetMenu;
