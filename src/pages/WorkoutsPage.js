import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddWorkoutExerciseForm from "../components/AddWorkoutExerciseForm";
import WorkoutExerciseList from "../components/WorkoutExerciseList";
import { StyledDialog } from "../styles/DialogStyles";
import useInterceptor from "../utils/useInterceptor";
import { WorkoutsPagewrapper } from "../styles/WrapperStyles";
import { BrightLine } from "../styles/LineStyles";

const WorkoutsPage = () => {
  const { id } = useParams();
  const [exercises, setExercises] = useState([]);
  const [workoutDate, setWorkoutDate] = useState("");
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
    axiosInterceptor.post("/workout_exercises/", formData);
    setFormData({
      name: "",
      sets: "",
      reps: "",
      weight: "",
      unit: "kg",
      workout_id: id,
    });
    axiosInterceptor.get(`/workouts/${id}`).then((response) => {
      setExercises(response.data.exercises);
    });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    axiosInterceptor.get(`/workouts/${id}`).then((response) => {
      setExercises(response.data.exercises);
      setWorkoutDate(response.data.date);
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
      <WorkoutsPagewrapper>
        <div>
          <h1>Workouts</h1>
          <BrightLine style={{ marginBottom: "50px" }} />
          <h3>{workoutDate}</h3>
          <WorkoutExerciseList exercises={exercises} openDialog={openDialog} />
          <StyledDialog className="workout-dialog">
            <AddWorkoutExerciseForm
              formData={formData}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              closeDialog={closeDialog}
            />
          </StyledDialog>
        </div>
      </WorkoutsPagewrapper>
    </>
  );
};

export default WorkoutsPage;
