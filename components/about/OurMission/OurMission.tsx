/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./OurMission.module.css";
import Container from "@/components/Container/Container";
import Image from "next/image";

function OurMission() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.container}>
          <div className={styles.leftContent}>
            <div className={styles.title}>Our Mission</div>
            <div className={styles.caption}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Parturient lorem purus justo, ultricies. Sollicitudin odio
              elementum urna placerat lacus, vulputate. Non malesuada viverra et
              ultrices cras. Tincidunt tempor, blandit augue ac feugiat.
              Praesent arcu tempus ullamcorper quisque in. Magna fermentum,
              lacus, fermentum arcu. Vulputate pellentesque proin facilisis
              dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae
              porta lacus. Elit in nisl, in quis nulla tellus suscipit id.
              Semper velit odio cras pretium tristique habitant. Elit eu
              penatibus congue orci turpis. Enim diam id.
            </div>
            <div />
            <div className={styles.title}>Our Story</div>
            <div className={styles.caption}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Parturient lorem purus justo, ultricies. Sollicitudin odio
              elementum urna placerat lacus, vulputate. Non malesuada viverra et
              ultrices cras. Tincidunt tempor, blandit augue ac feugiat.
              Praesent arcu tempus ullamcorper quisque in. Magna fermentum,
              lacus, fermentum arcu. Vulputate pellentesque proin facilisis
              dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae
              porta lacus. Elit in nisl, in quis nulla tellus suscipit id.
              Semper velit odio cras pretium tristique habitant. Elit eu
              penatibus congue orci turpis. Enim diam id.
            </div>
          </div>
          <div className={styles.rightContent}>
            <div className={styles.imageContainer}>
              <img
                alt="Our Mission"
                height={"100%"}
                width={"100%"}
                // height={400}
                // width={400}
                src="/assets/icons/our-mission.png"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default OurMission;
