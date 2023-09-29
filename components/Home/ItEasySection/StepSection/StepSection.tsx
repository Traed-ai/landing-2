import { Grid } from "@mui/material";
import React from "react";

const StepSectionCard = () => {
  return <Grid width={"32%"} height={"100%"} bgcolor={"yellow"} ></Grid>;
};
const StepSection = () => {
  return (
    <Grid
      className="stepSectionCardWrapper"
      width={"100%"}
      minHeight={"400px"}
      bgcolor={"red"}
    >
      <StepSectionCard />
    </Grid>
  );
};

export default StepSection;
