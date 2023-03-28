import React from 'react';
import './Home.scss';
import Carousel from '../Carousel/Carousel';
import Product from '../Product/Product';

function Home() {
  return (
    <div className='Home'>
        <Carousel className='carousel-main'/>
        <div className='home-products'>

          <div className='home-row'>
            <Product 
              id='123456'
              title='Sony WH-CH720NHB Over-Ear Noise Cancellation(Black)'
              price={9990}
              rating='★★☆☆☆'
              image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51rpbVmi9XL._SX522_.jpg' 
            />
            <Product
              id='456789'
              title='boAt Wave Call Smart Watch, Smart Talk(Active Black)'
              price={1999}
              rating='★★★★☆'
              image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/614AipEWSIL._SX522_.jpg'
            />
            <Product
            id=''
            title='OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W)'
            price={31999}
            rating='★★★★☆'
            image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41o3CoW58tL._SX300_SY300_QL70_FMwebp_.jpg'
            />
            <Product
            id=''
            title='JBL Cinema SB241, Dolby Digital Soundbar '
            price={10999}
            rating='★★★☆☆'
            image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61i28yZlsdL._SX522_.jpg'
            />
          </div>

          <div className='home-row'>
            <Product
              id=''
              title='God Of War Ragnarok | Standard Edition | PS5 Game (PlayStation 5)'
              price={4488}
              rating='★★★★★'
              image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81f3ZmXx3cL._SY500_.jpg'
            />
            <Product
              id=''
              title='Sony Marvel Spider-Man: Miles Morales | PS5 Game (PlayStation 5)'
              price={2649}
              rating='★★★☆☆'
              image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81wXH8IqhKL._SY500_.jpg'
            />
            <Product
            id=''
            title='Xbox Series X – Forza Horizon 5 Bundle'
            price={59990}
            rating='★★☆☆☆'
            image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61rSOfp1U1L._SX522_.jpg'
            />
          </div>

          <div className='home-row'>
            <Product
            id=''
            title='Samsung 34-inch(86.4cm) LED 3440 x 1440 Pixels 2K WQHD, Curved Monitor, 21:9 Ultrawide, PBP, PIP, 100Hz, QLED, Thunderbolt 3 Port (LC34J791WTWXXL, Gray)'
            price={76299}
            rating='★★★☆☆'
            image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/91pi34PiUPL._SX522_.jpg' 
            />
          </div>
        </div>
    </div>
  )
}

export default Home
