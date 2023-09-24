import React from "react";
import styles from "./ExploreEndlessPossibilities.module.css";
import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";
import Image from "next/image";

function ExploreEndlessPossibilities() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.title}>
              Explore endless possibilities with Traed.
            </div>
            <div className={styles.caption}>
              Secure your seat today at traed. Enjoy early benifits by joining
              traed community now. We are providing simple assets solution every
              successfull company needs.
            </div>
            <Button
              backgroundColor="#0C2027"
              color="#fff"
              borderRadius="80px"
              height="56px"
              width="184px"
            >
              Get Started
            </Button>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={"/assets/icons/2mobiles.png"}
              alt="explore"
              layout="fill"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ExploreEndlessPossibilities;
