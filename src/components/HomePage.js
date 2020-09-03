import React, {useState} from  'react';
import '../App.css';
import Button from './Button';
import Navigation from './Navigation';
import SearchResults from './SearchResults';




const HomePage = (props) =>{

    return (
        <div className="home-page">
            <div className="homepage-right">
             <div>           
             <div><h2>No book should ever lay idle</h2></div>
            <div><h4>Borrow a book</h4></div>
            <div><h4>Lend a book</h4></div>
            </div>

            </div>

            <div className="search-results-div">
            <SearchResults />
            </div>
        </div>
    )
}

export default HomePage;