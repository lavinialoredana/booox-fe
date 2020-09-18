import React from "react";
import "../App.css";
// import Button from "./Button";
// import Search from "./Search";
// import SearchResults from "./SearchResults";
import justShareIt from "./fotos/justShareIt.PNG";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav className="navigation">
      <div className="container">
        <div className="logo-div">
          <Link to="/">
            {" "}
            <img alt="" src={justShareIt} />
          </Link>
        </div>
        <div>
          <button className="register">
            <Link to="signup">Sign Up</Link>
          </button>

          <button className="login">
            <Link to="/login">Login</Link>{" "}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
