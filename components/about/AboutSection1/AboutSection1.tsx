import React from "react";
import styles from "./AboutSection1.module.css";
import Container from "@/components/Container/Container";

function AboutSection1() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.container}>
          <div className={styles.title}>About Traed</div>
          <div className={styles.caption}>
            Traed.ai is a trade finance platform that uses AI and machine
            learning technology to provide innovative solutions to businesses
            looking to optimize their trade finance processes.
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AboutSection1;
