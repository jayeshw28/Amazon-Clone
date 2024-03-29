import React from "react";
import "./Home.scss";
import Carousel from "../Carousel/Carousel";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="Home">
      <Carousel className="carousel-main" />
      <div className="home-products">
        <div className="home-row">
          <Product
            id="123456"
            title="Sony WH-CH720NHB Over-Ear Noise Cancellation(Black)"
            price={9990}
            rating="★★☆☆☆"
            image="https://m.media-amazon.com/images/I/51rpbVmi9XL._SL1200_.jpg"
          />
          <Product
            id="456789"
            title="boAt Wave Call Smart Watch, Smart Talk(Active Black)"
            price={1999}
            rating="★★★★☆"
            image="https://m.media-amazon.com/images/I/61H5PEqBBAL._SL1500_.jpg"
          />
          <Product
            id="447891"
            title="OnePlus 10R 5G (Black, 8GB RAM, 128GB Storage)"
            price={31999}
            rating="★★★★☆"
            image="https://m.media-amazon.com/images/I/71BoiXkrEmL._SL1500_.jpg"
          />
          <Product
            id="227856"
            title="JBL Cinema SB241, Dolby Digital Soundbar"
            price={10999}
            rating="★★★☆☆"
            image="https://m.media-amazon.com/images/I/61i28yZlsdL._SL1500_.jpg"
          />
        </div>

        <div className="home-row">
          <Product
            id="551247"
            title="God Of War Ragnarok | Standard Edition | PS5 Game (PlayStation 5)"
            price={4488}
            rating="★★★★★"
            image="https://m.media-amazon.com/images/I/81f3ZmXx3cL._SL1500_.jpg"
          />
          <Product
            id="474715"
            title="Sony Marvel Spider-Man: Miles Morales | PS5 Game (PlayStation 5)"
            price={2649}
            rating="★★★☆☆"
            image="https://m.media-amazon.com/images/I/717s4q9FuiL._SL1500_.jpg"
          />
          <Product
            id="714855"
            title="Xbox Series X – Forza Horizon 5 Bundle"
            price={59990}
            rating="★★☆☆☆"
            image="https://m.media-amazon.com/images/I/71AbYCAvr-L._SL1500_.jpg"
          />
        </div>

        <div className="home-row">
          <Product
            id="235147"
            title="Samsung 34-inch(86.4cm) LED 3440 x 1440 Pixels 2K WQHD, Curved Monitor, 21:9 Ultrawide, PBP, PIP, 100Hz, QLED, Thunderbolt 3 Port (LC34J791WTWXXL, Gray)"
            price={76299}
            rating="★★★☆☆"
            image="https://m.media-amazon.com/images/I/81oADRhNq2L._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
