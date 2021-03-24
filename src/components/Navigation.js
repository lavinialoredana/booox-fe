import React from "react";
import "./Navigation.css";

import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div className="navigation">

        <h2> <Link to="/userprofile">BOOOX</Link></h2>
      

        <div className="login-register">
          <button className="register">
            <Link to="signup">SIGN UP</Link>
          </button>

          <button className="login">
            <Link to="/login">LOGIN</Link>{" "}
          </button>

        </div>
    </div>
  );
};

export default Navigation;
