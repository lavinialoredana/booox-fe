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

    const openMenu = () => {
        document.querySelector('.sidebar').classList.add('open');
      }
    
      const closeMenu = () =>{
        document.querySelector('.sidebar').classList.remove('open');
      }

    return (
        
        <div className="navigation">
            <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
            

            <li>
                <Link to="/userprofile">Profile Area</Link>
            </li>
            <li>
                <Link to="/bookupload">upload Book </Link>
            </li>
            <li>
                <a href="index.html">Wallets</a>
            </li>
        </ul>
    </aside>
        
           <div className="container">
        <div><button className="login" onClick={openMenu}>menu</button></div>
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