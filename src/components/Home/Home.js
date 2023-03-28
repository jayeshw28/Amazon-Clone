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
            <Product/>
            <Product/>
          </div>

          <div className='home-row'>
            {/*Product*/}
            {/*Product*/}
            {/*Product*/}
          </div>

          <div className='home-row'>
            {/*Product*/}
          </div>
        </div>
    </div>
  )
}

export default Home
