import "./App.scss";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Checkout from "./components/Checkout/Checkout";
import { Route, Routes } from "react-router-dom";
import UserLogin from "./components/UserLogin/UserLogin";
import { useEffect, UseState } from "react";
import { useStateValue } from "./components/StateProvider/StateProvider";
import { auth } from "./firebase";
import CartPayment from "./components/CartPayments/CartPayment";
import ReturnPolicy from "./components/ReturnPolicy/ReturnPolicy";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51N06I0SJxsVZXSFaCZ19Rw9JcaKNSAOeGeLjUyhh6eqXRNvEVKb5HLUKEoKehZFoAEVUv9TzcwwWZQnc4na3fanC00epz0ZJN3"
);

function App() {
  const [{}, dispatch] = useStateValue();

  const [backenddata, setBackenddata] = useStateValue([{}]);

  useEffect(() => {
    //fetching data from backend
    // fetch("/api").then((response) =>
    //   response.json().then((data) => {
    //     setBackenddata(data);
    //   })
    // );

    //user login authentication
    auth.onAuthStateChanged((authUser) => {
      console.log("USER_IS >>>", authUser);

      if (auth) {
        //after user is newly registered or login
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //if user logged out or not yet login
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payments" element={<CartPayment stripe={promise} />} />
        <Route path="/return&order_policy" element={<ReturnPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
