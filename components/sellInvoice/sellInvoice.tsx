import React from "react";
import Container from "../Container/Container";
import flex1 from "@/public/assets/flex1.svg";
import flex2 from "@/public/assets/flex2.svg";
import flex3 from "@/public/assets/flex3.svg";
import flexImage from "@/public/assets/flexImage.svg";

import Image from "next/image";
import "./ImageSection.scss";

const SellInvoice = () => {
  return (
    <Container>
      <div
        className="imageTextSection"
        style={{
          width: "100%",
          margin: "100px 0",
          justifyContent: "space-between",
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
            width: "48%",
          }}
        >
          <div className="heading-content">
            <p>Sell invoices with traed’s solutions</p>
          </div>
          <div className="para-content">
            <p>Sell your claims to traed and get your money immediately</p>
            <div className="para-icon-content">
              <Image src={flex1} alt={""} />
              <p>Fast financing solutions </p>
            </div>
            <div className="para-icon-content">
              <Image src={flex2} alt="" />
              <p>Fast and secure growth for your company</p>
            </div>
            <div className="para-icon-content">
              <Image src={flex3} alt="" />
              <p>Create realtime secured deals</p>
            </div>
          </div>
        </div>
        <div
          className="ImageSection"
          style={{
            width: "48%",
          }}
        >
          <Image alt="" src={flexImage} />
        </div>
      </div>
    </Container>
  );
};

export default SellInvoice;
