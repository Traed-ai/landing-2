import React from "react";
import Container from "../Container/Container";
import aboutImg from "@/public/assets/aboutImg.svg";


import Image from "next/image";
import "./ImageSection.scss";

const AboutUsSection = () => {
  return (
    <Container>
      <div
        className="imageTextSection"
        style={{
          width: "100%",

          justifyContent: "center",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <div
          className="content"
          style={{
            width: "50%",
          }}
        >
          <div className="heading-content">
            <p>About Us</p>
          </div>
          <div className="para-content">
            <p>
              TraedAI is a trade finance platform that leverages cutting-edge AI
              and machine learning technology to provide innovative solutions to
              businesses looking to optimize their trade finance processes.
            </p>
          </div>
        </div>
        <div
          className="ImageSection"
          style={{
            width: "50%",
          }}
        >
          <Image alt="" src={aboutImg} />
        </div>
      </div>
    </Container>
  );
};

export default AboutUsSection;
