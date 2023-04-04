import React from 'react'
import './Subtotal.scss'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider/StateProvider';
import { getCartTotal } from '../../reducer';

function Subtotal() {
  const [{ cart }] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({cart.length} items): <strong>{ value }</strong>
            </p>

            <small className='subtotal-gift'><input type='checkbox'/>This order contains a gift</small>
          </div>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
      />
      <button className='buy-button'>Proceed to Buy</button>
    </div>
  )
}

export default Subtotal