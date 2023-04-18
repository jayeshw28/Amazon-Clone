import React from 'react'
import './Checkout.scss'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Subtotal from '../Subtotal/Subtotal';
import { useStateValue } from '../StateProvider/StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <div className='checkout-title'>
          <span>{cart.length==0?'Your Amazon Cart is Empty.':'Shopping Cart'}</span>
          <p>{cart.length==0?'':'price'}</p>
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
        <div className='checkout-empty'>{cart.length==0?'Add item(s) from Home page on clicking \'Add to Cart\' on relevant product(s)':''}</div>
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
