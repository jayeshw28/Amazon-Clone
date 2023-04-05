import React from 'react'
import './Checkout.scss'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Subtotal from '../Subtotal/Subtotal';
import { useStateValue } from '../StateProvider/StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';

function Checkout() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <div className='checkout-title'>
          <span>Shopping Cart</span>
          <p>price</p>
        </div>

        {cart.map(item=> (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
        ))
        }

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
      </div>
    </div>
  )
}

export default Checkout
