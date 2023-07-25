import React from "react";

const AddWorkoutForm = ({ formData, handleSubmit, handleChange }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="exercise"
          placeholder="Exercise..."
          value={formData.exercise}
          onChange={handleChange}
          required
        />
        <Input
          type="number"
          min="1"
          name="sets"
          placeholder="Sets..."
          value={formData.sets}
          onChange={handleChange}
          required
        />
        <Input
          type="number"
          min="1"
          name="reps"
          placeholder="Reps..."
          value={formData.reps}
          onChange={handleChange}
          required
        />
        <Input
          type="number"
          min="1"
          name="weight"
          placeholder="Weight..."
          value={formData.weight}
          onChange={handleChange}
          required
        />
        <Select name="unit" value={formData.unit} onChange={handleChange}>
          <option value="kg">Kg</option>
          <option value="lbs">Lbs</option>
        </Select>
        <button>Add exercise</button>
      </form>
    </>
  );
};

export default AddWorkoutForm;
