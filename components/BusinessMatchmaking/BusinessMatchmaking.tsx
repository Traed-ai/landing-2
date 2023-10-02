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
            Traed helps your business save time every day!
          </div>
          <div className={styles.caption}>
            Traed offers a simple and clear accounting software that can be used
            anywhere at any. This allows a maximum of flexibility and
            convenience for you and your customers.
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
