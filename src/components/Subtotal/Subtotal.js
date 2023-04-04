import React from 'react'
import './Subtotal.scss'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider/StateProvider';

function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({cart.length} items): <strong>0</strong>
            </p>

            <small className='subtotal-gift'><input type='checkbox'/>This order contains a gift</small>
          </div>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
      />
      <button className='buy-button'>Proceed to Buy</button>
    </div>
  )
}

export default Subtotal