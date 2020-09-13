import React, { useState } from "react";
import "../App.css";
// import Button from './Button';

const SignUp = () => {
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  //   const handleOnChange = (event) => {
  //     const updateFormData = {
  //       ...formData,
  //       [event.target.name]: event.target.value,
  //     };
  //     setFormData(updateFormData);
  //   };

  const [reRender, setReRender] = useState("enable");
  //   const handleSubmit = (event) => {
  //     if (reRender === "enable") {
  //       setReRender("disable");
  //     } else {
  //       setReRender("enable");
  //     }
  //   };
  console.log(formData.firstName);
  console.log(formData.lastName);
  console.log(formData.email);

  //   const initialValue = {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //   };

  const [fetchedData, setFetchedData] = useState([]);
  console.log(fetchedData, setFetchedData);

  console.log("rerender", reRender);

  // function fetchData () {

  // }

  return (
    <div className="login-register-body">
      <div className="login-register-container">
        <div className="login-register-header">
          <h1>Sign-Up</h1>
        </div>

        <form className="form" id="form">
          <div className="form-control">
            <level for="signup-name">Name</level>
            <input type="text" id="signup-name" />
            <i className="fas fa-check-circle" />
            <i className="fas fa-exclamation-circle" />
            <small>error message</small>
          </div>
          <div className="form-control">
            <level for="signup-surname">Surname</level>
            <input type="text" id="signup-surname" />
            <i className="fas fa-check-circle" />
            <i className="fas fa-exclamation-circle" />
            <small>error message</small>
          </div>
          <div className="form-control">
            <level for="signup-address">Address</level>
            <input type="text" id="signup-address" />
            <i className="fas fa-check-circle" />
            <i className="fas fa-exclamation-circle" />
            <small>error message</small>
          </div>
          <div className="form-control">
            <level for="signup-username">Username</level>
            <input type="text" id="signup-username" />
            <i className="fas fa-check-circle" />
            <i className="fas fa-exclamation-circle" />
            <small>error message</small>
          </div>
          <div className="form-control">
            <level for="signup-password">Password</level>
            <input type="text" id="signup-password" />
            <i className="fas fa-check-circle" />
            <i className="fas fa-exclamation-circle" />
            <small>error message</small>
          </div>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
