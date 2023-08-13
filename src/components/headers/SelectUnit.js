import React, { useState, useEffect, useContext } from "react";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";

const SelectUnit = () => {
  return (
    <>
      <Divider textAlign="left">
        <Typography variant="body1">Unit</Typography>
      </Divider>
      <FormControl>
        <RadioGroup row>
          <FormControlLabel value="Kg" control={<Radio />} label="Kg" />
          <FormControlLabel value="Lbs" control={<Radio />} label="Lbs" />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default SelectUnit;
