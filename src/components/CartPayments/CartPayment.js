import React from "react";
import "./CartPayment.scss";
import LockIcon from "@mui/icons-material/Lock";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../StateProvider/StateProvider";
import Subtotal from "../Subtotal/Subtotal";

function CartPayment() {
  const [{ cart, user }, dispatch] = useStateValue();
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
                  <span>Khushi Bangade</span>
                  <br />
                  Matoshree Girls Hostel A(old), GECA Government College of
                  Engineering Aurangabad,
                  <br />
                  New Usmanpura <br />
                  AURANGABAD, MAHARASHTRA 431005 India
                  <br />
                  <a>Add Delivery Instructions</a>
                </span>
              </div>
            </li>
            <li>
              <div className="payment-body-left-preview">
                <a>Review Item(s) & Delivery</a>
                <br />

                <div className="card">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPayment;
