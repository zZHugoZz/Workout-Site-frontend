import React from "react";
import AddWorkoutForm from "../components/AddWorkoutForm";
import WorkoutExerciseList from "../components/WorkoutExerciseList";
import { StyledDialog } from "../styles/DialogStyles";

const WorkoutsPage = () => {
  const { id } = useParams();
  const [workout, setWorkout] = useState({});
  const [exercises, setExercises] = useState([]);
  const [formData, setFormData] = useState({
    exercise: "",
    sets: "",
    reps: "",
    weight: "",
    unit: "kg",
    corresponding_workout_id: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/api/workout_exercises/", formData);
    console.log("exercises: ", exercises);
    setFormData({
      exercise: "",
      sets: "",
      reps: "",
      weight: "",
      unit: "kg",
      corresponding_workout_id: null,
    });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    axios.get(`/api/workouts/${id}`).then((response) => {
      setWorkout(response.data);
      setExercises(response.data.exercises);
      formData.corresponding_workout_id = response.data.id;
    });
  }, [id, exercises]);

  const openDialog = () => {
    const dialog = document.querySelector("#workout-dialog");
    dialog.showModal();
  };

  const closeDialog = () => {
    const dialog = document.querySelector("#workout-dialog");
    dialog.showModal();
  };

  return (
    <>
      <h1>Workouts</h1>
      <WorkoutExerciseList exercises={exercises} />
      <button onClick={openDialog}>Add exercise</button>
      <StyledDialog id="workout-dialog">
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
