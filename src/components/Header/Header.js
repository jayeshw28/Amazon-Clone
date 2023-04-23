import React, { useState } from "react";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import { auth } from "../../firebase";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();
  const HandleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header-option-location">
        <LocationOnOutlinedIcon className="header-location-icon" />
        <div className="header-location">
          <span className="header-option-one">Hello</span>
          <span className="header-option-two">Select Your Address</span>
        </div>
      </div>

      <div className="header-search-bar">
        <input className="header-search-input" type="text" />
        <SearchIcon className="header-search-icon" />
      </div>

      <div
        className="header-nav"
        title={user ? "Click to Sign Out" : "go to Sign In"}
      >
        <Link to={!user && "/login"}>
          <div className="header-option" onClick={HandleAuth}>
            <span className="header-option-one">
              Hello,{" "}
              {user
                ? user.email.substring(0, user.email.indexOf("@"))
                : "Guest"}
            </span>
            <span className="header-option-two">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/return&order_policy">
          <div className="header-option">
            <span className="header-option-one">Returns</span>
            <span className="header-option-two">& Orders</span>
          </div>
        </Link>

        <Link to="https://www.primevideo.com">
          <div className="header-option">
            <span className="header-option-one">Your</span>
            <span className="header-option-two">Prime</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header-option-cart">
            <ShoppingCartOutlinedIcon className="header-shoppingcart-icon" />
            <div className="header-option-cart-inner">
              <span className="header-option-count">{cart.length}</span>
              <span className="header-option-two">Cart</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
