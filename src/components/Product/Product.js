import React from 'react'
import './Product.scss'

function Product() {
  return (
    <div className='product'>
        <div className='product-info'>
            <p className='product-para'>lean start up</p>
            <p className='product-price'>
                <small>₹</small>
                <strong>499</strong>
            </p>
        </div>
    </div>
  )
}

export default Product
