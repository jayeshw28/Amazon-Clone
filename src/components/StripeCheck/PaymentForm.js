import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import "./PaymentForm.scss";

const CARD_OPTIONS = {
  iconStyle: "solid",
  hidePostalCode: true,
  style: {
    base: {
      iconColor: "#b1afafb4",
      color: "#000000",
      fontWeight: 300,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#000000" },
      "::placeholder": { color: "#b1afafb4" },
    },
    invalid: {
      iconColor: "#b1afafb4",
      color: "#b1afafb4",
    },
  },
};

function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          amount: 1000,
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };
  //   const [success, setSuccess] = useState(false);
  //   const stripe = useStripe();
  //   const elements = useElements();

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     const { error, paymentMethod } = await stripe.createPaymentMethod({
  //       type: "card",
  //       card: elements.getElement(CardElement),
  //     });

  //     if (!error) {
  //       try {
  //         const { id } = paymentMethod;
  //         const response = await axios.post("http://localhost:4000/payment", {
  //           amount: 1000,
  //           id,
  //         });

  //         if (response.data.success) {
  //           console.log("Successful payment");
  //           setSuccess(true);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     } else {
  //       console.log(error.message);
  //     }
  //   };
  return (
    <div>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button className="pay-button">Pay</button>
        </form>
      ) : (
        <div>
          <h2>Thanks From Buying From Us, you just got scamed</h2>
        </div>
      )}
    </div>
  );
}

export default PaymentForm;
