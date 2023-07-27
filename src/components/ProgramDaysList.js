import React from "react";

const ProgramDaysList = ({ days }) => {
  return (
    <>
      <div>
        {days.map((day, i) => (
          <div key={day.id}>
            <h2>Day {i + 1}</h2>
            {day.exercises.map((exercise) => (
              <div key={exercise.id}></div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProgramDaysList;
