import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const AddWorkoutExerciseForm = ({
  formData,
  handleSubmit,
  handleChange,
  closeDialog,
}) => {
  return (
    <>
      <h2>Add exercise</h2>
      <button onClick={closeDialog}>
        <CloseIcon style={{ color: "#AFC0CF" }} />
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Exercise..."
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          min="1"
          name="sets"
          placeholder="Sets..."
          value={formData.sets}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          min="1"
          name="reps"
          placeholder="Reps..."
          value={formData.reps}
          onChange={handleChange}
          required
        />
        <div>
          <input
            type="number"
            min="1"
            step="0.5"
            name="weight"
            placeholder="Weight..."
            value={formData.weight}
            onChange={handleChange}
            required
          />
          <select name="unit" value={formData.unit} onChange={handleChange}>
            <option value="kg">Kg</option>
            <option value="lbs">Lbs</option>
          </select>
        </div>
        <button>Add exercise</button>
      </form>
    </>
  );
};

export default AddWorkoutExerciseForm;
