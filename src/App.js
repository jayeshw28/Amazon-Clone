import './App.scss';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';
import { Route, Routes } from "react-router-dom";
import UserLogin from './components/UserLogin/UserLogin';
import { useEffect } from 'react';
import { useStateValue } from './components/StateProvider/StateProvider';
import { auth } from './firebase';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      console.log('USER_IS >>>', authUser)

      if(auth){
        //after user is newly registered or login
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }
      else{
        //if user logged out or not yet login
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
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
