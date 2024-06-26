import React from "react";

const PerformancesList = ({ progression, unit }) => {
  return (
    <>
      <ul>
        {progression.performances.map((performance, i) => (
          <li key={performance.id}>
            {`session ${i + 1}:`}
            {performance.weight}
            {unit} {`added on: ${performance.date}`}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PerformancesList;
