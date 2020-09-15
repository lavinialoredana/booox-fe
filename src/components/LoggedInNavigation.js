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
    }

    return (
        
        <div className="navigation">
           <div className="container">
        <div className="logo-div">
          <Link to="/">
            {" "}
            <img src={justShareIt} />
          </Link>
        </div>
        <div>
          <button className="login" onClick={(e) => logout(e)}>
            <Link to="/login">Logout</Link>
          </button>
        </div>
      </div>
        </div>
    )
}

export default LoggedInNavigation;