import React from 'react'
import './Product.scss'
import { useStateValue } from '../StateProvider/StateProvider'

function Product({ id, title, image, price, rating}) {

    const [{cart}, dispatch]= useStateValue();
    const Addtocart= () =>{
      dispatch({
        type: 'ADD_TO_CART',
        item:{
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    };

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
        <button onClick={Addtocart}>Add to Cart</button>
    </div>
  )
}

export default Product
