"use client"
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import topBan from "@/public/assets/topBan.jpg";
import "./banner.scss";
import Container from "@/components/Container/Container";
import useWindowDimensions from "../../../hooks/useWindowDimensions"

const TopBanner = () => {
  const {width} = useWindowDimensions()
 
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
      <Container>
        <Grid className="textDiv">
          <Typography className="bannerHeading">
            Accounting, but make it easy - withTraed!
          </Typography>
          <Typography className="bannerText">
            Applications that power financial institutions, marketplaces that
            accelerate industry & an open innovation platform for banks,
            fintechs & non-banks to connect and collaborate.
          </Typography>
          <button style={{
            background:"#06BA63",
            borderColor:"transparent",
            borderRadius: "6px",
            boxShadow:"0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
            padding:"14px 18px;",
            textAlign:"center",
            fontSize:"14px",
            fontWeight:"600",
            color:"#fff",
            marginTop:"15px"
          }} >Get Started</button>
        </Grid>
      </Container>
    </Grid>
  );
};

export default TopBanner;
