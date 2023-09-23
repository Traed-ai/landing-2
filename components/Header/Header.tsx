import React from "react";
import styles from "./header.module.css";
import Container from "../Container/Container";
import Image from "next/image";
import Button from "../Button/Button";

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <Container>
        <div className={styles.headerContainer}>
          <div className={styles.headerLogo}>
            <Image
              src="./assets/logo/logo-white-bg.svg"
              height={32}
              width={80}
              alt="tread.ai"
            />
          </div>
          <div className={styles.headerNav}>
            <div className={styles.headerNavItem}>About</div>
            <div className={styles.headerNavItem}>Our Solutions</div>
            <div className={styles.headerNavItem}>Sectors</div>
            <div className={styles.headerNavItem}>Knowledge</div>
            <div className={styles.headerNavItem}>Company</div>
            <Button
              borderRadius="6px"
              color="#fff"
              width="130px"
              height="40px"
              backgroundColor="#06BA63"
            >
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
