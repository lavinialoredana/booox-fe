import React from 'react';
import '../App.css';
import Button from './Button';

const SignIn = (props) => {



    return (
        <div class="form-div-2">
                    <h2>Sign In here</h2>
                    <form class="login-form">
                        <label for="username">Username</label>
                        <input type="text" name="username" id="username" />
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" />
                        <Button buttonName = 'login'/>
                        <Button buttonName = 'Sign Up' onclick = {props.showSignUpForm}/>
                    
                    </form>
        </div>
    )
}

export default SignIn;