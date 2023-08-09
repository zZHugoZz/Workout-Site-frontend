import React from "react";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

import AddWorkoutExerciseSetForm from "./AddWorkoutExerciseSetForm";

const AddWorkoutExerciseSetDialog = ({ isOpen, setIsOpen, id }) => {
  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogTitle>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h6">Add set</Typography>
            <IconButton onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <AddWorkoutExerciseSetForm id={id} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddWorkoutExerciseSetDialog;
