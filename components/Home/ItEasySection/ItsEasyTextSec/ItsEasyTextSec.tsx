import React from "react";
import styles from "./AboutSection1.module.css";
import Container from "@/components/Container/Container";

function ItsEasyTextSec() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.container}>
          <div className={styles.title}>
          It’s easy. So how is that <span style={{
            color:"#06BA63"
          }} >possible?</span>
          </div>
          <div className={styles.caption}>
            Traed offers a simple and clear accounting software that can be used
            anywhere at any. This allows a maximum of flexibility and
            convenience for you and your customers.
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ItsEasyTextSec;
