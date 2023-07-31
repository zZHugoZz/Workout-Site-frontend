import React from "react";
import { useState } from "react";
import useInterceptor from "../utils/useInterceptor";
import { StyledDialogInput } from "../styles/InputStyles";
import { StyledDialogHeaderContainer } from "../styles/ContainerStyles";
import { HoverButton } from "../styles/ButtonStyles";
import { StyledIconContainer } from "../styles/IconStyles";
import CloseIcon from "@mui/icons-material/Close";
import { DialogLine } from "../styles/LineStyles";
import { GreenButton } from "../styles/ButtonStyles";
import { VerticalForm } from "../styles/FormStyles";

const AddProgramExerciseForm = ({ dayId, setDays, programId, closeDialog }) => {
  const [formData, setFormData] = useState({
    name: "",
    min_sets: "",
    max_sets: "",
    min_reps: "",
    max_reps: "",
    day_id: dayId,
  });

  const axiosInterceptor = useInterceptor();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axiosInterceptor.post("/program_exercises", formData);
    axiosInterceptor.get(`/programs/${programId}`).then((response) => {
      setDays(response.data.days);
    });
    setFormData({
      name: "",
      min_sets: "",
      max_sets: "",
      min_reps: "",
      max_reps: "",
      day_id: dayId,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Exercise..."
        />

        <StyledDialogInput
          type="number"
          min={1}
          name="min_sets"
          value={formData.min_sets}
          onChange={handleChange}
          required
          placeholder="Min sets..."
        />

        <StyledDialogInput
          type="number"
          min={1}
          name="max_sets"
          value={formData.max_sets}
          onChange={handleChange}
          required
          placeholder="Max sets..."
        />

        <StyledDialogInput
          type="number"
          min={1}
          name="min_reps"
          value={formData.min_reps}
          onChange={handleChange}
          required
          placeholder="Min reps..."
        />

        <StyledDialogInput
          type="number"
          min={1}
          name="max_reps"
          value={formData.max_reps}
          onChange={handleChange}
          required
          placeholder="Max reps..."
        />

        <GreenButton>Add exercise</GreenButton>
      </VerticalForm>
    </>
  );
};

export default AddProgramExerciseForm;
