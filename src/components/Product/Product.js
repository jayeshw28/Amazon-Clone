import React from 'react'
import './Product.scss'

function Product({title,image,price,rating}) {
  return (
    <div className='product'>
        <div className='product-info'>
            <p className='product-para'>{title}</p>
            <p className='product-price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='product-rating'><p>{rating}</p></div>
        </div>
        <img src={image} alt='Amazon.in cards'/>
        <button>Add to Cart</button>
    </div>
  )
}

export default Product
