import React from 'react'
import './Checkout.scss'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Subtotal from '../Subtotal/Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <div className='checkout-title'>
          <span>Shopping Cart</span>
        </div>
          {/*Basket*/}
          {/*Basket*/}
          {/*Basket*/}
          {/*Basket*/}
          {/*Basket*/}
      </div>

      <div className='checkout-right'>
        <div>        
          
          <div className='checkout-desc'>
            <CheckCircleIcon className='checkout-icon'/>
            <div><a className='first-desc'>Part of your order qualifies for FREE Delivery.</a>
            Select this option at checkout.
            <br/><a href=''>Details</a></div>
          </div>
        </div>
        <Subtotal/>
        <button className='buy-button'>Proceed to Buy</button>
      </div>
    </div>
  )
}

export default Checkout
