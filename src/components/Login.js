import React from 'react';
import '../App.css';
import Button from './Button';
import {Link } from 'react-router-dom';

const Login = (props) => {



    return (
        <div className="login-register-body">
        <div className="login-register-container">
            <div className="login-register-header">
                <h1>Login</h1>
            </div>
        
        <form className="form" id="form">
            <div className="form-control">
                <level for="login-username">Username</level>
                <input type='text' id="login-username"/>
                <i className="fas fa-check-circle" />
                <i className="fas fa-exclamation-circle" />
                <small>error message</small>
            </div>
            <div className="form-control">
                <level for="login-password">Password</level>
                <input type='text' id="login-password"/>
                <i className="fas fa-check-circle" />
                <i className="fas fa-exclamation-circle" />
                <small>error message</small>
            </div>
            <button>Login</button>

      </form>
      <div><Link to="/loggedIn/">click me for user page</Link></div>
                    
        </div>
        </div>
    )
}

export default Login;