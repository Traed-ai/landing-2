import React from "react";
import Container from "../Container/Container";
import ImgSide from "@/public/assets/ImgSide.svg";
import paraImg from "@/public/assets/paraImg.svg";
import sell2 from "@/public/assets/sell2.svg";
import sell3 from "@/public/assets/sell3.svg";

import Image from "next/image";
import "./ImageSection.scss";

const FlexibleSection = () => {
  return (
    <Container>
      <div
        className="imageTextSection"
        style={{
          width: "100%",

          justifyContent: "space-between",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
          margin: "100px 0",
        }}
      >
        <div
          className="ImageSection"
          style={{
            width: "48%",
          }}
        >
          <Image alt="" src={ImgSide} />
        </div>
        <div
          className="content"
          style={{
            width: "48%",
          }}
        >
          <div className="heading-content">
            <p>Our smart platform is flexible</p>
          </div>
          <div className="para-content">
            <p>Accounting doesn’t has to be that complicated.</p>
            <div className="para-icon-content">
              <Image src={paraImg} alt={""} />
              <p>Easy handling without previous knowledge</p>
            </div>
            <div className="para-icon-content">
              <Image src={sell2} alt="" />
              <p>Access anywhere and anytime</p>
            </div>
            <div className="para-icon-content">
              <Image src={sell3} alt="" />
              <p>24/7 Premium Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FlexibleSection;
