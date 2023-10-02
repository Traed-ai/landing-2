import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import styles from "./AboutSection2.module.css";
import card1 from "@/public/assets/card1.svg";
import card2 from "@/public/assets/card2.svg";
import card3 from "@/public/assets/card3.svg";
import Image from "next/image";
import Container from "@/components/Container/Container";

const StepSectionCard = () => {
  return <Grid width={"32%"} height={"100%"} bgcolor={"yellow"}></Grid>;
};
const StepSection = () => {
  return (
    <Container>
    <Grid className={styles.container}>
      <Card className={styles.card}>
        <CardContent className={styles.content}>
          <Image src={card1} alt="card1" className={styles.image} />
          <div className={styles.head}>Step 1 - Setup your portal</div>
          <div className={styles.cont1}>
            Install or Register web portal of traed.ai by clicking on&nbsp;
            <span style={{ textDecoration: "underline" }}>
              Get Started button.
            </span>
          </div>
        </CardContent>
      </Card>
      <Card className={styles.card}>
        <CardContent className={styles.content}>
          <Image src={card2} alt="card2" className={styles.image} />
          <div className={styles.head}>Step 2 - Upload your legal docs</div>
          <div className={styles.cont1}>
            Complete the simple onboarding for your company to get registered on
            traed.
          </div>
        </CardContent>
      </Card>
      <Card className={styles.card}>
        <CardContent className={styles.content}>
          <Image src={card3} alt="card3" className={styles.image} />
          <div className={styles.head}>Step 3 - Onboard and enjoy</div>
          <div className={styles.cont1}>
            That’s it!! Start enjoying all features of traed platform to make
            accounting simple.{" "}
          </div>
        </CardContent>
      </Card>
    </Grid>
    </Container>
  );
};

export default StepSection;
