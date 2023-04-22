import React from 'react'
import './Subtotal.scss'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider/StateProvider';
import { getCartTotal } from '../../reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const navigate = useNavigate();
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
      <button onClick={e =>navigate('/payments')} className='buy-button'>Proceed to Buy</button>
    </div>
  )
}

export default Subtotal