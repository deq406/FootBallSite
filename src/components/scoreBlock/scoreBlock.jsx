import React from "react";
import styles from "./scoreBlock.module.scss";
const scoreBlock = () => {
  return (
    <div>
      <section className={styles.container}>
        <div className={styles.firstBlock}>
          <img
            src={
              "https://banner2.cleanpng.com/20190223/bqv/kisspng-fc-barcelona-logo-vector-graphics-football-image-5c71e478167a69.5648857315509679280921.jpg"
            }
          ></img>
          <p>1 : 1</p>
          <img
            src={
              "https://st3.depositphotos.com/6579288/16320/i/600/depositphotos_163200234-stock-photo-kolobok-bun-sings-a-song.jpg"
            }
          ></img>
        </div>
        <div className={styles.secondBlock}>
          <img
            src={
              "https://st3.depositphotos.com/6579288/16320/i/600/depositphotos_163200234-stock-photo-kolobok-bun-sings-a-song.jpg"
            }
          ></img>
          <p>1 : 1</p>
          <img
            src={
              "https://st3.depositphotos.com/6579288/16320/i/600/depositphotos_163200234-stock-photo-kolobok-bun-sings-a-song.jpg"
            }
          ></img>
        </div>
        <div className={styles.thirdBlock}>
          <img
            src={
              "https://st3.depositphotos.com/6579288/16320/i/600/depositphotos_163200234-stock-photo-kolobok-bun-sings-a-song.jpg"
            }
          ></img>
          <p>1 : 1</p>
          <img
            src={
              "https://st3.depositphotos.com/6579288/16320/i/600/depositphotos_163200234-stock-photo-kolobok-bun-sings-a-song.jpg"
            }
          ></img>
        </div>
      </section>
      <section className={styles.secondContainer}>
        <div className={styles.firstBlock}>
          <img></img>
          <p></p>
          <img></img>
        </div>
        <div className={styles.secondBlock}>
          <img></img>
        </div>
        <div className={styles.thirdBlock}>
          <img></img>
        </div>
      </section>
    </div>
  );
};

export default scoreBlock;
