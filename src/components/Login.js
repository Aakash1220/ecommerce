import React from 'react'
import './css/account.css';
import {
    BrowserRouter as Router,

    Link
  } from "react-router-dom";
function Login() {
    return (
        <div className="login">
           <h2>Login</h2>
           <div className="account_container">
              
               <input type="email" placeholder='sample@gmail.com'/>
               <input type="password" placeholder='Password'/>
               <button>Login</button>
               <p>Dont have Account?<a ><Link to={{pathname:'/register'}}>Reigister Here!</Link></a></p>
           </div>
        </div>
    )
}

export default Login
