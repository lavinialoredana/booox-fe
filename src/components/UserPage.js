import React, {useState} from  'react';
import '../App.css';
import LoggedInNavigation from './LoggedInNavigation';
import Search from './SearchResults';
import SearchResults from './SearchResults';





const UserPage = (props) =>{

    return (

            
        <div className="user-page">
            <div className="user-page-left"></div>


            <div className="user-page-rigth">
                <SearchResults />
            </div>
            
        </div>
    )
}

export default UserPage;