import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Box from "@mui/material/Box";
import StepLabel from "@mui/material/StepLabel";
type Props = {};

const steps = ["User Name", "Location", "Bussiness", "Bank", "Verification"];

function From({}: Props) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default From;
