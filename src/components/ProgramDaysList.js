import React from "react";
import useInterceptor from "../utils/useInterceptor";
import AddProgramExercise from "./AddProgramExercise";

const ProgramDaysList = ({ days, programId, setDays }) => {
  const axiosInterceptor = useInterceptor();

  const handleDeleteDay = async (dayId) => {
    await axiosInterceptor.delete(`/program_days/${dayId}`);
    axiosInterceptor.get(`/programs/${programId}`).then((response) => {
      setDays(response.data.days);
    });
  };

  const handleDeleteExercise = async (exerciseId) => {
    await axiosInterceptor.delete(`/program_exercises/${exerciseId}`);
    axiosInterceptor.get(`/programs/${programId}`).then((response) => {
      setDays(response.data.days);
    });
  };

  return (
    <>
      <div>
        {days.map((day, i) => (
          <div key={day.id}>
            <h2>Day {i + 1}</h2>
            <AddProgramExercise
              dayId={day.id}
              setDays={setDays}
              programId={programId}
            />
            <button onClick={() => handleDeleteDay(day.id)}>Delete day</button>
            {day.exercises.map((exercise) => (
              <div key={exercise.id}>
                <p>{exercise.name}</p>
                <button onClick={() => handleDeleteExercise(exercise.id)}>
                  Delete exercise
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProgramDaysList;
