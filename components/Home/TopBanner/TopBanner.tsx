"use client";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import topBan from "@/public/assets/topBan.jpg";
import "./banner.scss";
import Container from "@/components/Container/Container";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import Link from "next/link";
import Button from "@/components/Button/Button";

const TopBanner = () => {
  const { width } = useWindowDimensions();

  return (
    <Grid
      sx={{
        width: "100%",
        height: "100%",
      }}
      className="BannerImg"
    >
      <Grid className="imgGrid">
        <div
          className={"imgBg"}
          style={{
            width: "100%",
            height: width && width > 768 ? "900px" : "500px",
          }}
        />
        <Image
          style={{
            width: "100%",
            height: width && width > 768 ? "900px" : "500px",
            objectFit: "cover",
            objectPosition: "right center",
          }}
          src={topBan}
          alt=""
        />
      </Grid>
      <Container>
        <div className="textDiv">
          <div className="bannerHeading">
            Simplify Your Trade Finance Process
          </div>
          <div className="bannerText">
            Streamline trade finance operations with Traed.ai. Save time,
            effort, and costs by automating borrower verification, document
            exchanges, and seamless integration with KYC, KYB, Credit Insurance
            agents and the clients' accounting systems.
          </div>
          <Link
            href={"https://portal.traed.ai"}
            passHref
            style={{
              textDecoration: "none",
              color: "#000",
              // margin: "0 auto",
            }}
          >
            <Button
              borderRadius="6px"
              color="#fff"
              width="130px"
              height="40px"
              backgroundColor="#06BA63"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </Container>
    </Grid>
  );
};

export default TopBanner;
