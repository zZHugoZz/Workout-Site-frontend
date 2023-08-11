import React, { useState } from "react";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const SelectWorkoutExerciseUnit = () => {
  return (
    <>
      <FormControl>
        <InputLabel>Unit</InputLabel>
        <Select>
          <MenuItem value="Kg">Kg</MenuItem>
          <MenuItem value="Lbs">Lbs</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default SelectWorkoutExerciseUnit;
