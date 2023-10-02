import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import topBan from "@/public/assets/topBan.jpg";

const TopBanner = () => {
  return (
    <Grid
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Image
        style={{
          width: "100%",
          height: "100%",
        }}
        src={topBan}
        alt=""
      />
    </Grid>
  );
};

export default TopBanner;
