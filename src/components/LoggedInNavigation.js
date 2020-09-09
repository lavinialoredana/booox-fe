import React, { useState } from "react";
import "../App.css";
import Button from "./Button";
import Search from "./Search";
import SearchResults from "./SearchResults";
import justShareIt from "./fotos/justShareIt.PNG";
import { Link } from "react-router-dom";

const LoggedInNavigation = (props) => {
  return (
    <div className="navigation">
      <div className="logo-div">
        <Link to="/">
          {" "}
          <img src={justShareIt} />
        </Link>
      </div>
      <h1>Welcome : USER_1 </h1>
    </div>
  );
};

export default LoggedInNavigation;
