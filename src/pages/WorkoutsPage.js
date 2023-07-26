import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AddWorkoutForm from "../components/AddWorkoutForm";
import WorkoutExerciseList from "../components/WorkoutExerciseList";
import { StyledDialog } from "../styles/DialogStyles";
import useInterceptor from "../utils/useInterceptor";

const WorkoutsPage = () => {
  const { id } = useParams();
  const [workout, setWorkout] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    sets: "",
    reps: "",
    weight: "",
    unit: "kg",
    workout_id: id,
  });

  const axiosInterceptor = useInterceptor();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axios.post("/workout_exercises/", formData);
    setFormData({
      name: "",
      sets: "",
      reps: "",
      weight: "",
      unit: "kg",
      workout_id: null,
    });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    console.log("formData: ", formData);
  }, [formData]);

  useEffect(() => {
    axiosInterceptor.get(`/workouts/${id}`).then((response) => {
      setWorkout(response.data);
    });
  }, []);

  const openDialog = () => {
    const dialog = document.querySelector(".workout-dialog");
    dialog.showModal();
  };

  const closeDialog = () => {
    const dialog = document.querySelector(".workout-dialog");
    dialog.close();
  };

  return (
    <>
      <h1>Workouts</h1>
      <WorkoutExerciseList workout={workout} />
      <button onClick={openDialog}>Add exercise</button>
      <StyledDialog className="workout-dialog">
        <AddWorkoutForm
          formData={formData}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
        <button onClick={closeDialog}>Close</button>
      </StyledDialog>
    </>
  );
};

export default WorkoutsPage;
