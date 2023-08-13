import React, { useState, useEffect, useContext } from "react";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";

import { UnitContext } from "../../context/UnitContext";
import useInterceptor from "../../utils/useInterceptor";

const SelectUnit = () => {
  const { unit, setUnit } = useContext(UnitContext);
  const axiosInterceptor = useInterceptor();

  const handleChangeUnit = async (e) => {
    await axiosInterceptor.put("/units", {
      unit: e.target.value,
    });
    setUnit(e.target.value);
  };

  useEffect(() => {
    axiosInterceptor.get("/units").then((response) => {
      setUnit(response.data.unit);
    });
  }, []);

  return (
    <>
      <Divider textAlign="left" sx={{ paddingBottom: "10px" }}>
        <Typography variant="body1">Unit</Typography>
      </Divider>
      <FormControl>
        <RadioGroup row value={unit} onChange={handleChangeUnit}>
          <FormControlLabel value="Kg" control={<Radio />} label="Kg" />
          <FormControlLabel value="Lbs" control={<Radio />} label="Lbs" />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default SelectUnit;
