import React from "react";

const AddWorkoutForm = ({ formData, handleSubmit, handleChange }) => {
  return (
    <>
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
        <input
          type="number"
          min="1"
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
        <button>Add exercise</button>
      </form>
    </>
  );
};

export default AddWorkoutForm;
