import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import IconButton from "@mui/material/IconButton";

import useInterceptor from "../../../utils/useInterceptor";
import { WorkoutsContext } from "../../../context/WorkoutsContext";

const AddWorkout = () => {
  const { date } = useContext(WorkoutsContext);
  const navigate = useNavigate();
  const axiosInterceptor = useInterceptor();

  const [isDisabled, setIsDisabled] = useState(false);

  const handleAddWorkout = async () => {
    try {
      setIsDisabled(true);
      const response = await axiosInterceptor.post("/workouts", {
        date: date.format("YYYY-MM-DD"),
        day: date.date(),
        month: date.month() + 1,
        year: date.year(),
      });
      navigate(`/manage/workouts/${response.data.id}`);
      setIsDisabled(false);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <>
      <IconButton
        onClick={handleAddWorkout}
        title="Add new workout"
        sx={{ width: "max-content" }}
        disabled={isDisabled}
      >
        <AddCircleOutlinedIcon htmlColor="green" />
      </IconButton>
    </>
  );
};

export default AddWorkout;
