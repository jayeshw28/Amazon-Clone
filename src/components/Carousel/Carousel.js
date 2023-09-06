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
            src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
            alt="Amazon.in image"
          />
        </div>
        <div>
          <img
            className="carousel-slide-img"
            src="https://m.media-amazon.com/images/I/71QRxZvKnGL._SX3000_.jpg"
            alt="Amazon.in image"
          />
        </div>
        <div>
          <img
            className="carousel-slide-img"
            src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
            alt="Amazon.in image"
          />
        </div>
        <div>
          <img
            className="carousel-slide-img"
            src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
            alt="Amazon.in image"
          />
        </div>
        <div>
          <img
            className="carousel-slide-img"
            src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg"
            alt="Amazon.in image"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
