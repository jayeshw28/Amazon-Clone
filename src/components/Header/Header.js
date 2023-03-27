import React from 'react'
import './Header.scss'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Header() {
  return (
    <div className='header'>
      <img className='header-logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
      <div className='header-option-location'>
        <LocationOnIcon className='header-location-icon'/>
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
        <div className='header-option'>
          <span className='header-option-one'>Hello,Jayesh</span>
          <span className='header-option-two'>Sign In</span>
        </div>
        <div className='header-option'>
          <span className='header-option-one'>Returns</span>
          <span className='header-option-two'>& Orders</span>
        </div>
        <div className='header-option'>
          <span className='header-option-one'>Your</span>
          <span className='header-option-two'>Prime</span>
        </div>
        <div className='header-option-cart'>
          <ShoppingCartOutlinedIcon className='header-shoppingcart-icon'/>
          <div className='header-option-cart-inner'>
            <span className='header-option-count'>0</span>
            <span className='header-option-two'>Cart</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header
