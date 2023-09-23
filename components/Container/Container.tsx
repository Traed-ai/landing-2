import React from "react";
import styles from "./container.module.css";

function Container({ children }: any) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
