import React from 'react'
import './CheckoutProduct.scss'
import { useStateValue } from '../StateProvider/StateProvider'

function CheckoutProduct({ id, title, image, price, rating}) {
    const [{ cart }, dispatch] = useStateValue();

    const removefromCart = () =>{
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })

    }
  return (
    <div className='checkoutproduct'>
        <div className='checkoutproduct-product'>
            <img className='checkoutproduct-image' src={image} />

            <div className='checkoutproduct-info'>
                <p className='checkoutproduct-title'>{title}</p>
                <div className='checkoutproduct-rating'><p>{rating}</p></div>
                <div className='checkoutproduct-midinfo'>
                    <p className='stock'>In stock</p>
                    <p className='shipp'>Eligible for FREE Shipping</p>
                    <img src='https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png' />
                    <p className='check'><input type="checkbox"/>
                    <label>This will be a gift <a href=''>Learn more</a></label></p>
                </div>
                <button onClick={removefromCart}>Remove from Cart</button>
            </div>
        </div>

        <div>
            <p className='checkoutproduct-price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p> 
        </div>
      
    </div>
  )
}

export default CheckoutProduct
