import React from "react";

const SelectProgressionUnit = ({ handleUnitChange, unit }) => {
  return (
    <>
      <input onChange={handleUnitChange} value={unit}>
        <option value="Kg">Kg</option>
        <option value="Lbs">Lbs</option>
      </input>
    </>
  );
};

export default SelectProgressionUnit;
