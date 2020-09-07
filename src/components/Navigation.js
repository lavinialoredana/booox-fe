import React, {useState} from  'react';
import '../App.css';
import Button from './Button';
import Search from './Search';
import SearchResults from './SearchResults';
import justShareIt from './fotos/justShareIt.PNG'   
import {Link } from "react-router-dom";




const Navigation = (props) =>{

    return (
        <div className="navigation">
            <div className="logo-div"><Link to="/"> <img src={justShareIt} /></Link></div>
            <div className="register"><Link to="signup"> SignUp</Link></div>

            <div className="login"><Link to="/login">Login</Link> </div>
            
        </div>
    )
}

export default Navigation;