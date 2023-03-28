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
              title='Shirts & Trousers'
              price={599}
              image='https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/Symbol/2021/wrs/mencombo_low._SY304_CB666768535_.jpg' 
            />
            <Product
              id='456789'
              title='Smart Watches'
              price={1999}
              image='https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg'
            />
            <Product/>
            <Product/>
          </div>

          <div className='home-row'>
            <Product/>
            <Product/>
            <Product/>
          </div>

          <div className='home-row'>
            <Product/>
          </div>
        </div>
    </div>
  )
}

export default Home
