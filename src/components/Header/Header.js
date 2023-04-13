import React from 'react'
import './Header.scss'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';

function Header() {
  const [{ cart }, dispatch] = useStateValue();
  
  return (
    <div className='header'>
      <Link to='/'><img className='header-logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/></Link>
      <div className='header-option-location'>
        <LocationOnOutlinedIcon className='header-location-icon'/>
        <div className='header-location'>
          <span className='header-option-one'>Hello</span>
          <span className='header-option-two'>Select Your Address</span>
        </div>
      </div>

      <div className='header-search-bar'>
        <input className='header-search-input' type='text'/>
        <SearchIcon className='header-search-icon'/>
      </div>

      <div className='header-nav'>
        <Link to='/login'>
          <div className='header-option'>
            <span className='header-option-one'>Hello,Jayesh</span>
            <span className='header-option-two'>Sign In</span>
          </div>
        </Link>


        <div className='header-option'>
          <span className='header-option-one'>Returns</span>
          <span className='header-option-two'>& Orders</span>
        </div>

        <div className='header-option'>
          <span className='header-option-one'>Your</span>
          <span className='header-option-two'>Prime</span>
        </div>

        <Link to='/checkout'>
          <div className='header-option-cart'>
            <ShoppingCartOutlinedIcon className='header-shoppingcart-icon'/>
            <div className='header-option-cart-inner'>
              <span className='header-option-count'>{cart.length}</span>
              <span className='header-option-two'>Cart</span>
            </div>
          </div>
        </Link>

      </div>

    </div>
  )
}

export default Header
