import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import topBan from "@/public/assets/topBan.jpg";
import "./banner.scss";

const TopBanner = () => {
  return (
    <Grid
      sx={{
        width: "100%",
        height: "100%",
      }}
      className="BannerImg"
    >
      <Grid className="imgGrid">
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          src={topBan}
          alt=""
        />
      </Grid>
      <Grid className="textDiv" >

      </Grid>
    </Grid>
  );
};

export default TopBanner;
