import React from "react";
import useInterceptor from "../utils/useInterceptor";

const ProgramDaysList = ({ days, id, setDays }) => {
  const axiosInterceptor = useInterceptor();

  const handleDeleteDay = async (day_id) => {
    await axiosInterceptor.delete(`/program_days/${day_id}`);
    axiosInterceptor.get(`/programs/${id}`).then((response) => {
      setDays(response.data.days);
    });
  };

  return (
    <>
      <div>
        {days.map((day, i) => (
          <div key={day.id}>
            <h2>Day {i + 1}</h2>
            <button onClick={() => handleDeleteDay(day.id)}>Delete day</button>
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
