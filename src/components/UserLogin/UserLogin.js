import React, { useState } from 'react'
import './UserLogin.scss'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function UserLogin() {
  const navigate = useNavigate();
  const [Email, SetEmail] = useState('');
  const [Password, SetPassord] = useState('');
  const SignIn = e =>{
    e.preventDefault();
    //firebase login process
    auth
      .signInWithEmailAndPassword(Email, Password)
      .then((auth) => {
        //new user account is created
        if(auth){
          navigate.push('/');
        }
      })
      .catch(error => alert(error.message))
  }
  const Register = e =>{
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(Email, Password)
      .then(auth => {
        //new user account is created
        if(auth){
          navigate.push('/');
        }
      })
      .catch(error => alert(error.message))

    //firebase register process
  }
  return (
    <div className='login'>
    <Link>
    <a className='login-logo'>
    <img src='https://pngimg.com/uploads/amazon/small/amazon_PNG2.png'/>
    <span>.in</span>
    </a>
    </Link>

    <div className='login-outerbox'>
    <div className='login-box'>
      <large>Sign in</large>
      <form action="/">
        <a>E-mail</a>
        <input type='text' onChange={e => SetEmail(e.target.value)}/>
        <a>Password</a>
        <input type='password' onChange={e => SetPassord(e.target.value)}/>
      </form>
      <button type='submit' onClick={SignIn}>Continue</button>
      <a>By continuing, you agree to Amazon's <a href='#'>Conditions of Use</a> and <a href='#'>Privacy Notice</a></a>
      <a href='#'><ArrowRightIcon/> Need Help?</a>
    </div>

    <div className='login-bottom'>
      <hr/>
      <a>New to Amazon?</a>
      <hr/>
    </div>
    <button onClick={Register}>Create Your Amazon Account</button>
    
    </div>



  </div>
  )
}

export default UserLogin
