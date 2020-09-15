import React, {useState} from 'react';
import '../App.css';
import Button from './Button';
import {Link } from 'react-router-dom';

const Login = ({setAuth}) => {

    const [formData, setFormData] = useState({
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
    
    const {email, password } = formData;
    
    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
    const body = {email, password}
    
            const response = await fetch ("http://localhost:3001/auth/login", {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            })
    
            const   parseRes = await response.json();
            localStorage.setItem("token", parseRes.token);
            console.log(parseRes);

            if(parseRes.token){
                setAuth(true)
            }
            
        } catch (err) {
            console.error(err);
    
            
        }
    }
    
    
    
    
    const initialValue = {
        firstName: "",
        lastName: "",
        email: ""
    
    }



    return (
        <div className="login-register-body">
        <div className="login-register-container">
            <div className="login-register-header">
                <h1>Login</h1>
            </div>
        
        <form className="form" id="form" onSubmit={onSubmitForm}>
            <div className="form-control">
                <level for="login-email">User Email</level>
                <input type='text' id="login-email" name="email" onChange={handleOnChange} value={formData.email} className="login-email" placeholder="enter your email"/>
                <i className="fas fa-check-circle" />
                <i className="fas fa-exclamation-circle" />
                <small>error message</small>
            </div>
            <div className="form-control">
                <level for="login-password">Password</level>
                <input type='text' id="login-password" name="password" onChange={handleOnChange} value={formData.password} className="login-password" placeholder="enter your password"/>
                <i className="fas fa-check-circle" />
                <i className="fas fa-exclamation-circle" />
                <small>error message</small>
            </div>
            <button>Login</button>

      </form>
                    
        </div>
        </div>
    )
}

export default Login;