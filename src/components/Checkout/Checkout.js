import React from 'react'
import './Checkout.scss'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <div className='checkout-title'>
          <span>Shopping Cart</span>

          {/*Basket*/}
          {/*Basket*/}
          {/*Basket*/}
          {/*Basket*/}
          {/*Basket*/}
        </div>
      </div>

      <div className='checkout-right'>
        <div className='checkout-desc'><CheckCircleIcon />Part of your order qualifies for FREE Delivery. Select this option at checkout. Details</div>   
      </div>
    </div>
  )
}

export default Checkout
