import React, {useState} from  'react';
import '../App.css';
import Button from './Button';
import Search from './Search';
import SearchResults from './SearchResults';
import justShareIt from './fotos/justShareIt.PNG'   
import {Link } from "react-router-dom";




const LoggedInNavigation = (props) =>{

    const logout = (e) => {
        e.preventDefault();
        props.logoutfunction(false)
        localStorage.removeItem("token");
    }

    return (
        
        <div className="navigation">
           <div className="container">
        <div className="logo-div">
          <Link to="/">
            <img src={justShareIt} />
          </Link>
        </div>
        
        <div>
           <Link to="/userprofile"> <button className="login">User Page</button> </Link>
          <button className="login" onClick={(e) => logout(e)}>
              logout
          </button>
        </div>
      </div>
        </div>
    )
}

export default LoggedInNavigation;