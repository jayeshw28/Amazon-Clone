import React, { useState } from "react";
import "./CartPayment.scss";
import LockIcon from "@mui/icons-material/Lock";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import StripeContainer from "../StripeCheck/StripeContainer";
import { useStateValue } from "../StateProvider/StateProvider";
import { getCartTotal } from "../../reducer";

function CartPayment() {
  const [{ cart, user }, dispatch] = useStateValue();
  const [showItem, setShowItem] = useState(false);

  return (
    <div className="payment">
      <div className="payment-nav">
        <a className="login-logo">
          <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG2.png" />
          <a>.in</a>
        </a>
        <span>Checkout</span>
        <LockIcon />
      </div>

      <div className="payment-body">
        <div className="payment-body-left">
          <ul>
            <li>
              <div className="payment-body-left-address">
                <a>Delivery Address: </a>

                <span>
                  <span>Jayesh Wankhede</span>
                  <br />
                  Hostel-6(Kabir Hostel), Indian Institute of Informartion
                  Technology, Kota
                  <br />
                  Jhalana Gram, Malviya Nagar
                  <br />
                  Jaipur, Rajasthan 302017 India
                  <br />
                  <span>Add Delivery Instructions</span>
                </span>
              </div>
            </li>
            <li>
              <div className="payment-body-left-preview">
                <a>Review Item(s) & Delivery</a>
                <br />

                <div className="card">
                  <div className="card-state">
                    {cart.length == 0
                      ? "Your Amazon Cart is Empty."
                      : "Cart Preview"}
                  </div>
                  {cart.map((item) => (
                    <CheckoutProduct
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                    />
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="payment-body-right">
          <div>
            <div className="checkout-desc">
              <div>
                <a className="first-desc">
                  Part of your order qualifies for FREE Delivery.
                </a>
                Select this option at checkout.
                <br />
                <a href="">Details</a>
                <br />
                <div className="payment-button-div">
                  {showItem ? (
                    <StripeContainer />
                  ) : (
                    <div>
                      <h3>₹ {getCartTotal(cart)}</h3>
                      <button onClick={() => setShowItem(true)}>
                        Pay With Card
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPayment;
