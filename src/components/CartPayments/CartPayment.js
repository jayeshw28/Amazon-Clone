import React, { useState } from "react";
import "./CartPayment.scss";
import LockIcon from "@mui/icons-material/Lock";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../StateProvider/StateProvider";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { UseStripe, UseElements, CardElement } from "@stripe/react-stripe-js";
import StripeCheckout from "react-stripe-checkout";
import { getCartTotal } from "../../reducer";

// const promise = loadStripe(
//   "pk_test_51N06I0SJxsVZXSFaCZ19Rw9JcaKNSAOeGeLjUyhh6eqXRNvEVKb5HLUKEoKehZFoAEVUv9TzcwwWZQnc4na3fanC00epz0ZJN3"
// );

function CartPayment() {
  const [{ cart, user }, dispatch] = useStateValue();

  // const stripe = UseStripe();
  // const elements = UseElements();

  // const [error, setError] = useState(null);
  // const [disabled, setDisabled] = useState(true);

  // const HandleSubmit = (e) => {
  //   e.preventDefault();
  // };

  // const HandleChange = (e) => {
  //   setDisabled(e.empty);
  //   setError(e.error ? e.error.message : "");
  // };

  const onToken = (token) => {
    console.log(token);
  };

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
                  <StripeCheckout
                    className="payment-button"
                    stripeKey="pk_test_51N06I0SJxsVZXSFaCZ19Rw9JcaKNSAOeGeLjUyhh6eqXRNvEVKb5HLUKEoKehZFoAEVUv9TzcwwWZQnc4na3fanC00epz0ZJN3"
                    token={onToken}
                    amount={getCartTotal(cart) * 100}
                    name="Amazon Clone"
                    currency="INR"
                  />
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
