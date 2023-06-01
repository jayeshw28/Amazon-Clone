import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51N06I0SJxsVZXSFaCZ19Rw9JcaKNSAOeGeLjUyhh6eqXRNvEVKb5HLUKEoKehZFoAEVUv9TzcwwWZQnc4na3fanC00epz0ZJN3";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

function stripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}

export default stripeContainer;
