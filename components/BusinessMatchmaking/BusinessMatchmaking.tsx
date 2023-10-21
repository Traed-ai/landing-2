import React from "react";
import styles from "./BusinessMatchmaking.module.css";
import Container from "../Container/Container";
import Image from "next/image";

function BusinessMatchmaking() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.container}>
          <div className={styles.title}>
            Sharia-Compliant Trade Finance Solutions
          </div>
          <div className={styles.caption}>
            Experience the convenience of Sharia-compliant trade finance with
            Traed.ai. Unlock tailored working capital solutions adhering to
            Islamic principles. Access flexible funding options, secure export
            financing, and benefit from our comprehensive suite of services
          </div>
        </div>
        <div className={styles.gridContainer}>
          <div className={styles.gridColumn}>
            <div className={styles.gridCard}>
              <div className={styles.gridImage}>
                <Image src={"./assets/icons/div.svg"} layout="fill" alt="123" />
              </div>
              <div className={styles.gridTitle}>Invoice Discounting</div>
              <div className={styles.gridCaption}>
                A financing method where a business sells its unpaid invoices to
                a third party at a discount to access immediate cash flow.{" "}
              </div>
            </div>
            <div className={styles.gridCard}>
              <div className={styles.gridImage}>
                <Image src={"./assets/icons/div.svg"} layout="fill" alt="123" />
              </div>
              <div className={styles.gridTitle}>Deals managing</div>
              <div className={styles.gridCaption}>
                Overseeing and optimizing various aspects of business
                transactions, from negotiation and documentation to tracking and
                performance analysis.
              </div>
            </div>
          </div>
          <div className={styles.gridMainImage}>
            <Image
              src={"/assets/IOS.png"}
              alt="asd"
              layout="fill"
              objectPosition="center"
              objectFit="cover"
            />
          </div>
          <div className={styles.gridColumn}>
            <div className={styles.gridCard}>
              <div className={styles.gridImage}>
                <Image src={"./assets/icons/div.svg"} layout="fill" alt="123" />
              </div>
              <div className={styles.gridTitle}>Factoring</div>
              <div className={styles.gridCaption}>
                A financial service that allows businesses to sell their
                accounts unpaid invoices to a factoring company in exchange for
                fast cash.
              </div>
            </div>
            <div className={styles.gridCard}>
              <div className={styles.gridImage}>
                <Image src={"./assets/icons/div.svg"} layout="fill" alt="123" />
              </div>
              <div className={styles.gridTitle}>Reverse Factoring</div>
              <div className={styles.gridCaption}>
                A financial arrangement where a buyer facilitates early payments
                to their suppliers through a third-party financing provider
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BusinessMatchmaking;
