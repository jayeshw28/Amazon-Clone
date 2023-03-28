import React from 'react'
import './Product.scss'

function Product() {
  return (
    <div className='product'>
        <div className='product-info'>
            <p className='product-para'>Shirts & Formals</p>
            <p className='product-price'>
                <small>₹</small>
                <strong>499</strong>
            </p>
            <div className='product-rating'><p>★★☆☆☆</p></div>
        </div>
        <img src='https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/Symbol/2021/wrs/mencombo_low._SY304_CB666768535_.jpg'/>
        <button>Add to Cart</button>
    </div>
  )
}

export default Product
