import React from "react";
import Container from "../Container/Container";
import trade1 from "@/public/assets/trade1.svg";
import trade2 from "@/public/assets/trade2.svg";
import trade3 from "@/public/assets/trade3.svg";
import tradeImg from "@/public/assets/tradeImg.svg";

import Image from "next/image";
import "./ImageSection.scss";

const TradeSection = () => {
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
        }}
      >
        <div
          className="ImageSection"
          style={{
            width: "48%",
          }}
        >
          <Image alt="" src={tradeImg} />
        </div>
        <div
          className="content"
          style={{
            width: "48%",
          }}
        >
          <div className="heading-content">
            <p>Why choosing traed for trade managements?</p>
          </div>
          <div className="para-content">
            <p>
              Create invoices, quotes & co. automatically with your new digital
              accounting software.
            </p>
            <div className="para-icon-content">
              <Image src={trade1} alt={""} />
              <p>Save valuable time</p>
            </div>
            <div className="para-icon-content">
              <Image src={trade2} alt="" />
              <p>Keep the overview</p>
            </div>
            <div className="para-icon-content">
              <Image src={trade3} alt="" />
              <p>Work flexibly in the cloud</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TradeSection;
