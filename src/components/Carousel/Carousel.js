import React from "react";
import "./Carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Carousel() {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="carousel">
      <Slider {...settings} className="carousel-slider">
        <div>
          <img
            className="carousel-slide-img"
            src="https://i.ibb.co/j6C2nBV/51k-Jem3-UTp-L-SX3000.jpg"
            alt="Amazon.in image"
          />
        </div>
        <div>
          <img
            className="carousel-slide-img"
            src="https://i.ibb.co/s2H1Tr0/61-Gkz9-UJCHL-SX3000.jpg"
            alt="Amazon.in image"
          />
        </div>
        <div>
          <img
            className="carousel-slide-img"
            src="https://i.ibb.co/RStR7d2/614-GNcu-W2n-L-SX3000.jpg"
            alt="Amazon.in image"
          />
        </div>
        <div>
          <img
            className="carousel-slide-img"
            src="https://i.ibb.co/SBxgR2f/81-ISh8gkl-L-SX3000.jpg"
            alt="Amazon.in image"
          />
        </div>
        <div>
          <img
            className="carousel-slide-img"
            src="https://i.ibb.co/hmPVzTq/A1-HZYpow-YRL-SX3000.jpg"
            alt="Amazon.in image"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
