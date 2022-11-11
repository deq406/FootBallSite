import React from "react";
import styles from "./Block.module.scss";
const Blocks = () => {
  return (
    <section className={styles.root}>
      <div className={styles.bigBlock}>
        <div>
          <img></img>
          <text></text>
        </div>
      </div>
      <div className={styles.smallBlockOne}></div>
      <div className={styles.smallBlockTwo}></div>
    </section>
  );
};

export default Blocks;
