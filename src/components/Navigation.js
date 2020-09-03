import React, {useState} from  'react';
import '../App.css';
import Button from './Button';
import Search from './Search';
import SearchResults from './SearchResults';
import justShareIt from './fotos/justShareIt.PNG'   




const Navigation = (props) =>{

    return (
        <div className="navigation">
            <div className="logo-div"><img src={justShareIt} /></div>
            <div className="register">Register</div>
            <div className="login">Login</div>
            
        </div>
    )
}

export default Navigation;