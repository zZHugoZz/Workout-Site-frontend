import React from "react";
import { StyledSmallSelectInput } from "../styles/InputStyles";

const SelectProgressionUnit = ({ handleUnitChange, unit }) => {
  return (
    <>
      <StyledSmallSelectInput onChange={handleUnitChange} value={unit}>
        <option value="Kg">Kg</option>
        <option value="Lbs">Lbs</option>
      </StyledSmallSelectInput>
    </>
  );
};

export default SelectProgressionUnit;
