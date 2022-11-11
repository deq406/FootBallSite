import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <Carousel
      showStatus={false}
      autoPlay={true}
      stopOnHover={true}
      emulateTouch={true}
      infiniteLoop={true}
    >
      <div>
        <img
          src={
            "https://st3.depositphotos.com/6579288/16320/i/600/depositphotos_163200234-stock-photo-kolobok-bun-sings-a-song.jpg"
          }
        ></img>
        <p className="legend">Я футбольный мячик</p>
      </div>
      <div>
        <img
          src={
            "https://st3.depositphotos.com/6579288/16320/i/600/depositphotos_163200234-stock-photo-kolobok-bun-sings-a-song.jpg"
          }
        ></img>
        <p className="legend">Я футбольный мячик</p>
      </div>
      <div>
        <img
          src={
            "https://st3.depositphotos.com/6579288/16320/i/600/depositphotos_163200234-stock-photo-kolobok-bun-sings-a-song.jpg"
          }
        ></img>
        <p className="legend">Я футбольный мячик</p>
      </div>
    </Carousel>
  );
};

export default Slider;
