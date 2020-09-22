import React, { useState } from "react";
import "../App.css";

const SignUp = ({ setAuth }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const updateFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(updateFormData);
  };

  const { email, password, name } = formData;

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { name, email, password };

      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      sessionStorage.setItem("token", parseRes.token);

      setAuth(true);
    } catch (err) {
      console.error(err);
    }
  };

  //calling htmlFor the jwt token

  return (
    <div className="login-register-body">
      <div className="login-register-container">
        <div className="login-register-header">
          <h1>Sign-Up</h1>
        </div>

        <form className="form" id="form" onSubmit={onSubmitForm}>
          <div className="form-control">
            <label htmlFor="signup-name">Name</label>
            <input
              type="text"
              id="signup-name"
              name="name"
              onChange={handleOnChange}
              value={formData.name}
              className="signup-name"
            />
            <i className="fas fa-check-circle" />
            <i className="fas fa-exclamation-circle" />
            <small>error message</small>
          </div>
          <div className="form-control">
            <label htmlFor="signup-email">Email</label>
            <input
              type="email"
              id="signup-email"
              name="email"
              onChange={handleOnChange}
              value={formData.email}
              autoComplete="username"
              className="signup-email"
            />
            <i className="fas fa-check-circle" />
            <i className="fas fa-exclamation-circle" />
            <small>error message</small>
          </div>
          <div className="form-control">
            <label htmlFor="signup-password">Password</label>
            <input
              type="password"
              id="signup-password"
              name="password"
              onChange={handleOnChange}
              value={formData.password}
              autoComplete="new-password"
              className="signup-password"
            />
            <i className="fas fa-check-circle" />
            <i className="fas fa-exclamation-circle" />
            <small>error message</small>
          </div>
          {/* <div className="form-control">
                <label htmlFor="signup-username">Username</label>
                <input type='text' id="signup-username"/>
                <i className="fas fa-check-circle" />
                <i className="fas fa-exclamation-circle" />
                <small>error message</small>
            </div>
            <div className="form-control">
                <label htmlFor="signup-password">Password</label>
                <input type='text' id="signup-password" />
                <i className="fas fa-check-circle" />
                <i className="fas fa-exclamation-circle" />
                <small>error message</small>
            </div> */}
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
