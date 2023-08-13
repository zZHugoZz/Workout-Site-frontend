import React from "react";

import DeleteWorkoutExerciseSetButton from "./DeleteWorkoutExerciseSetButton";
import EditWorkoutExerciseSetButton from "./EditWorkoutExerciseSetButton";
import CustomMenu from "../../../utils/CustomMenu";

const WorkoutExerciseSetMenu = ({ setId }) => {
  return (
    <>
      <CustomMenu>
        <DeleteWorkoutExerciseSetButton setId={setId} />
        <EditWorkoutExerciseSetButton />
      </CustomMenu>
    </>
  );
};

export default WorkoutExerciseSetMenu;
