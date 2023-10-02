import React from "react";
import styles from "./WhatOurUserSay.module.css";
import Container from "@/components/Container/Container";
import Image from "next/image";

function WhatOurUserSay() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.container}>
          <div className={styles.title}>What our users say?</div>
          <div className={styles.content}>
            <div className={styles.card}>
              <div className={styles.reviewText}>
                “Traed has been a game-changer for our business. Their factoring
                services have improved our cash flow, allowing us to focus on
                growth and expansion. I recommend Traed to any business looking
                for reliable financial solutions.”
              </div>
              <div className={styles.reviewAuthor}>
                <div className={styles.authorImage}>
                  <Image
                    src={"/assets/icons/author-image.png"}
                    height={48}
                    width={48}
                    alt="author"
                  />
                </div>
                <div className={styles.authorContent}>
                  <div className={styles.authorName}>John Doe</div>
                  <div className={styles.authorDesignation}>CEO, Company</div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.reviewText}>
                “Traed has been a game-changer for our business. Their factoring
                services have improved our cash flow, allowing us to focus on
                growth and expansion. I recommend Traed to any business looking
                for reliable financial solutions.”
              </div>
              <div className={styles.reviewAuthor}>
                <div className={styles.authorImage}>
                  <Image
                    src={"/assets/icons/author-image.png"}
                    height={48}
                    width={48}
                    alt="author"
                  />
                </div>
                <div className={styles.authorContent}>
                  <div className={styles.authorName}>John Doe</div>
                  <div className={styles.authorDesignation}>CEO, Company</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default WhatOurUserSay;
