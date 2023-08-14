import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import { Zoom } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

import CustomMenu from "../../../utils/CustomMenu";
import AccessProgramButton from "./AccessProgramButton";
import DeleteProgramButton from "./DeleteProgramButton";

const Program = ({ program }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Grid xs={6}>
        <Paper
          key={program.id}
          sx={{
            padding: "5px",
            backgroundColor: "#f9ffdf",
          }}
          elevation={1}
        >
          <Divider>
            <Typography variant="h6">{program.name}</Typography>
          </Divider>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Tooltip
              title={program.description}
              arrow
              open={isOpen}
              onClose={() => setIsOpen(false)}
              TransitionComponent={Zoom}
            >
              <IconButton onClick={() => setIsOpen(true)}>
                <HelpOutlineIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <CustomMenu>
              <AccessProgramButton programId={program.id} />
              <DeleteProgramButton programId={program.id} />
            </CustomMenu>
          </Stack>
        </Paper>
      </Grid>
    </>
  );
};

export default Program;
