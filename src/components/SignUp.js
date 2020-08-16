import React from 'react';
import '../App.css'; 
import Button from './Button';


const SignUp = ( ) => {
    return (
            <div className="form-div-3" >
                <h2>Create Your Account Here</h2>
            <form class="login-form signup-form" >

<label for="username-new">Choose Your Username</label>
<input type="username" name="username-new" id="username-new" />

<label for="firstname">First Name </label>
<input type="text" name="firstname" id="firstname" />

<label for="lastname">Last Name</label>
<input type="text" name="lastname" id="lastname" />

<label for="address">Address</label>
<input type="text" name="address" id="address" />

<label for="password-new">Create Password</label>
<input type="password" name="password-new" id="password-new" />

<label for="confirm-password">Confirm Password</label>
<input type="password" name="confirm-password" id="confirm-password" />
<Button buttonName = "Sign Up" />
</form>

        </div>
    )
}

export default SignUp;

