import React from "react";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spacer}></div>
      <nav className={styles.root}>
        <div className={styles.logo}>FOOTBLOG</div>
        <div className={styles.buttons}>
          <div>Football</div>
          <div>Tennis</div>
          <div>blabla</div>
          <div>sdaad</div>
        </div>
      </nav>
      <div className={styles.spacer}></div>
    </div>
  );
};

export default Header;
