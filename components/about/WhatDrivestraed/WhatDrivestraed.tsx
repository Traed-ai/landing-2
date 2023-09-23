import React from "react";
import styles from "./WhatDrivestraed.module.css";
import Container from "@/components/Container/Container";
import Image from "next/image";

function WhatDrivestraed() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.container}>
          <div className={styles.title}>What drives Traed?</div>
          <div className={styles.cardWrapper}>
            {[1, 2, 3, 4].map((item, index) => {
              return (
                <div className={styles.card} key={index}>
                  <div className={styles.cardTitle}>
                    <Image
                      height={64}
                      width={64}
                      src="./assets/icons/group.svg"
                      alt="ai"
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardTitle}>OPEN SOURCE</div>
                    <div className={styles.cardCaption}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Et nibh urna in proin dui purus bibendum cras. Morbi
                      cursus nunc.
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default WhatDrivestraed;
