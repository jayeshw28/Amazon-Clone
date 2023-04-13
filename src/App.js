import './App.scss';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';
import { Route, Routes } from "react-router-dom";
import UserLogin from './components/UserLogin/UserLogin';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<UserLogin />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
