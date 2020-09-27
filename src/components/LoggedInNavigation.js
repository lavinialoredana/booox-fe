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
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <div className="loggedIn-navigation">
      <Link to="/"><h2>BOOOX</h2></Link>
      <aside className="sidebar">
      
      <div className="sidebar-2" onClick={closeMenu}>

          </div>  



        <div className="sidebar-1">

    
        <div><h2><i className='fas'>&#xf406;</i>Menu</h2></div> 
        
           <button className="sidebar-close-button" onClick={closeMenu}>
          x
        </button>

        
          <div className="sidebar-profile-area">
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

          

            <div onClick={logout}> 
            Logout
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
