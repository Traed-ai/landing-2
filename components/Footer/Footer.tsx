import React from "react";
import styles from "./Footer.module.css";
import Container from "../Container/Container";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <Container>
        <div className={styles.footerContainer}>
          <div className={styles.footerItem}>
            <div className={styles.footerItemLogo}>
              <Image
                height={32}
                width={80}
                src="./assets/logo/logo-white-bg.svg"
                alt="tread.ai"
              />
            </div>
            <div className={styles.footerContentText}>
              Traed.ai is a trade finance platform that uses AI and machine
              learning technology to provide innovative solutions to businesses
              looking to optimize their trade finance processes.
            </div>
          </div>
          <div className={styles.footerItem}>
            <div className={styles.footerItemTitle}>About Us</div>
            <div className={styles.footerItemContent}>Home</div>
            <div className={styles.footerItemContent}>Products</div>
            <div className={styles.footerItemContent}>Services</div>
          </div>
          <div className={styles.footerItem}>
            <div className={styles.footerItemTitle}>Contact Us</div>
            <div className={styles.footerItemContent}>Information</div>
            <div className={styles.footerItemContent}>Request a quote</div>
            <div className={styles.footerItemContent}>Consultations</div>
            <div className={styles.footerItemContent}>Help Center</div>
            <div className={styles.footerItemContent}>Terms and conditions</div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
