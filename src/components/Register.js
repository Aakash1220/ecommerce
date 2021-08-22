import React from 'react'
import './css/account.css';

function Register() {
    return (
        <div className="register">
            <h2>Sign Up</h2>
            <div className="account_container">
            <input type="text" placeholder='Username'/>
               <input type="email" placeholder='sample@gmail.com'/>
               <input type="password" placeholder='Password'/>
               <input type="Password" placeholder='Confirm Password'/>
               <button>Sign UP</button>
             
            </div>
        </div>
    )
}

export default Register
