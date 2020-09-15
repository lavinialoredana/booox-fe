import React, { useState, useEffect } from 'react';
import '../App.css'; 
import Button from './Button';




const SignUp = ({setAuth}) => {


const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
});

const handleOnChange = event => {
    
    const updateFormData = {
      ...formData,
      [event.target.name]: event.target.value
    };
    setFormData(updateFormData);


}

const {email, password, name } = formData;

const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
const body = {name, email, password}

        const response = await fetch ("http://localhost:3001/auth/register", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(body)
        })

        const   parseRes = await response.json();
        localStorage.setItem("token", parseRes.token);

        
        setAuth(true)
    } catch (err) {
        console.error(err);

        
    }
}




const initialValue = {
    firstName: "",
    lastName: "",
    email: ""

}

//calling htmlFor the jwt token




    return (
            <div className="login-register-body" >

                <div className="login-register-container">
                    <div className="login-register-header">
                        <h1>Sign-Up</h1>
                    </div>
        
        <form className="form" id="form" onSubmit={onSubmitForm}>
            <div className="form-control">
                <level htmlFor="signup-name">Name</level>
                <input type='text' id="signup-name" name="name" onChange={handleOnChange} value={formData.name} className="signup-name"/>
                <i className="fas fa-check-circle" />
                <i className="fas fa-exclamation-circle" />
                <small>error message</small>
            </div>
            <div className="form-control">
                <level htmlFor="signup-email">Email</level>
                <input type='email' id="signup-email" name="email" onChange={handleOnChange} value={formData.email} className="signup-email"/>
                <i className="fas fa-check-circle" />
                <i className="fas fa-exclamation-circle" />
                <small>error message</small>
            </div>
            <div className="form-control">
                <level htmlFor="signup-password">Password</level>
                <input type='password' id="signup-password" name="password" onChange={handleOnChange} value={formData.password} className="signup-password" />
                <i className="fas fa-check-circle" />
                <i className="fas fa-exclamation-circle" />
                <small>error message</small>
            </div>
            {/* <div className="form-control">
                <level htmlFor="signup-username">Username</level>
                <input type='text' id="signup-username"/>
                <i className="fas fa-check-circle" />
                <i className="fas fa-exclamation-circle" />
                <small>error message</small>
            </div>
            <div className="form-control">
                <level htmlFor="signup-password">Password</level>
                <input type='text' id="signup-password" />
                <i className="fas fa-check-circle" />
                <i className="fas fa-exclamation-circle" />
                <small>error message</small>
            </div> */}
            <button>Register</button>
      </form>
                    
        </div>
           

        </div>
    )
}

export default SignUp;

