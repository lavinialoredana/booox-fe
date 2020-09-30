import React from "react";
import "./Navigation.css";

import { Link } from "react-router-dom";

const LoggedInNavigation = (props) => {
  const logout = (e) => {
    e.preventDefault();
    props.logoutfunction(false);
    sessionStorage.removeItem("token");
  };

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");

    console.log(userDetails);
  };
  const name = sessionStorage.getItem("token");
  let userDetails = JSON.parse(atob(name.split(".")[1])).user;
  console.log("mydetails", userDetails);

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <div className="loggedIn-navigation">
      <h2 style={{ position: "absolute", left: "8rem",  }}>
        {" "}
        <Link to="/">BOOOX</Link>
      </h2>
      <aside className="sidebar">
        <div className="sidebar-2" onClick={closeMenu}></div>
        <div className="sidebar-1">
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <div className="sidebar-up">
            <h2>
              <i className="fas menuH2">&#xf406;&nbsp;&nbsp;&nbsp;</i>
              {userDetails.name}
            </h2>
          </div>
          <div>
            <Link to="/userprofile">Profile Area</Link>
          </div>

          <div>
            <Link to="/bookupload">Upload Books</Link>
          </div>

          <div onClick={logout}>
            <a href="index.html">LOGOUT</a>
          </div>
        </div>
      </aside>

      <button className="login" onClick={openMenu}>
        User Menu
      </button>
    </div>
  );
};

export default LoggedInNavigation;
