import React from "react";

const SelectProgressionUnit = ({ handleUnitChange, unit }) => {
  return (
    <>
      <select onChange={handleUnitChange} value={unit}>
        <option value="Kg">Kg</option>
        <option value="Lbs">Lbs</option>
      </select>
    </>
  );
};

export default SelectProgressionUnit;
