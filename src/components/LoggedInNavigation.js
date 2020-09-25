import React from "react";
import "../App.css";

import justShareIt from "./fotos/justShareIt.PNG";
import { Link } from "react-router-dom";

const LoggedInNavigation = (props) => {
  const logout = (e) => {
    e.preventDefault();
    props.logoutfunction(false);
    sessionStorage.removeItem("token");
  };

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <div className="navigation">
      <aside className="sidebar">
        <div className="sidebar-1">
      <button className="sidebar-close-button" onClick={closeMenu}>
          x
        </button>
        <div className="sidebar-up">
        <h2><i className='fas'>&#xf406;</i>Menu</h2>
        
        </div>
          <div>
            <Link to="/userprofile">Profile Area</Link>
            </div>
      
            <div>
            <Link to="/bookupload">Upload Books</Link>
            </div>
      
            <div>
            <a href="index.html">Edit Books</a>
            </div>

            <div>
            <a href="index.html">My messages </a>
            </div>

            <div>
            <a href="index.html">Update my info</a>
            </div>

            <div>
            <a href="index.html">Change Password</a>
            </div>
          

          </div>
          <div className="sidebar-2" onClick={closeMenu}>
          </div>  
      </aside>

      <div className="container">
        <div>
          <button className="login" onClick={openMenu}>
           User Menu
          </button>
        </div>
        <div className="logo-div">
          <Link to="/">
            <img alt="" src={justShareIt} />
          </Link>
        </div>

        <div>
          <button className="login" onClick={(e) => logout(e)}>
            logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoggedInNavigation;
