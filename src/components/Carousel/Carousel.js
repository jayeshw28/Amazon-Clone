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
            src="carousel1.jpg"
            alt="Amazon.in image"
          />
        </div>
        <div>
          <img
            className="carousel-slide-img"
            src="carousel2.jpg"
            alt="Amazon.in image"
          />
        </div>
        <div>
          <img
            className="carousel-slide-img"
            src="carousel3.jpg"
            alt="Amazon.in image"
          />
        </div>
        <div>
          <img
            className="carousel-slide-img"
            src="carousel4.jpg"
            alt="Amazon.in image"
          />
        </div>
        <div>
          <img
            className="carousel-slide-img"
            src="carousel5.jpg"
            alt="Amazon.in image"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
