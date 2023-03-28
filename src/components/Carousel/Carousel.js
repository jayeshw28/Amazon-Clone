import React from 'react'
import './Carousel.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Carousel() {
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

  return (
    <div className='carousel'>
      <div className='carousel-fade-div'></div>
      <Slider {...settings} className='carousel-slider'>
        <div><img className='carousel-slide-img' src='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51O45Sl0WLL._SX3000_.jpg'/></div>
        <div><img className='carousel-slide-img' src='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61O759bS39L._SX3000_.jpg'/></div>
        <div><img className='carousel-slide-img' src='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51ovs76vmtL._SX3000_.jpg'/></div>
        <div><img className='carousel-slide-img' src='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61tjBFsRL+L._SX3000_.jpg'/></div>
        <div><img className='carousel-slide-img' src='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61JkX-1tN9L._SX3000_.jpg'/></div>
      </Slider> 
    </div>
  )
}

export default Carousel
