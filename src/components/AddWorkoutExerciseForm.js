import React from "react";
import { StyledDialogInput } from "../styles/InputStyles";
import { DialogLine } from "../styles/LineStyles";
import { HoverButton } from "../styles/ButtonStyles";
import { StyledIconContainer } from "../styles/IconStyles";
import CloseIcon from "@mui/icons-material/Close";
import { StyledDialogHeaderContainer } from "../styles/ContainerStyles";
import { GreenButton } from "../styles/ButtonStyles";
import { VerticalForm } from "../styles/FormStyles";

const AddWorkoutExerciseForm = ({
  formData,
  handleSubmit,
  handleChange,
  closeDialog,
}) => {
  return (
    <>
      <StyledDialogHeaderContainer>
        <h2>Add exercise</h2>
        <HoverButton onClick={closeDialog}>
          <StyledIconContainer>
            <CloseIcon style={{ color: "#AFC0CF" }} />
          </StyledIconContainer>
        </HoverButton>
      </StyledDialogHeaderContainer>
      <DialogLine style={{ marginBottom: "30px" }} />
      <VerticalForm onSubmit={handleSubmit}>
        <StyledDialogInput
          type="text"
          name="name"
          placeholder="Exercise..."
          value={formData.name}
          onChange={handleChange}
          required
        />
        <StyledDialogInput
          type="number"
          min="1"
          name="sets"
          placeholder="Sets..."
          value={formData.sets}
          onChange={handleChange}
          required
        />
        <StyledDialogInput
          type="number"
          min="1"
          name="reps"
          placeholder="Reps..."
          value={formData.reps}
          onChange={handleChange}
          required
        />
        <div>
          <StyledDialogInput
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
        </div>
        <GreenButton>Add exercise</GreenButton>
      </VerticalForm>
    </>
  );
};

export default AddWorkoutExerciseForm;
