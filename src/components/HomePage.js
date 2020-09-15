import React, { useState, Link } from "react";
import "../App.css";
import Button from "./Button";
import Navigation from "./Navigation";
import SearchResults from "./SearchResults";
import Login from "./Login";




const HomePage = (props) => {
  const [classNam, setClassname] = useState(false);

const changeClassname = ( ) => {
  
  if (classNam === false) {
    setClassname(true)
  }
  else setClassname(false)
}




  return (
    
      <div className="home-page">
        <div className="home-page-up">
  <button onClick={changeClassname}>{!classNam ? "Login" : "Close"}</button>
        

        <h1>No BOOKS SHOULD EVER LAY IDLE</h1>
        <div className={ classNam ? "login-register-body-show" : "login-register-body-hide"}>

          {//login
}
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
                    
        </div>
        </div>
        </div>
        
        

        <div className="home-page-bottom">
          <SearchResults />
        </div>

        <div className="footer"></div>
      </div>
    
  );
};

export default HomePage;
