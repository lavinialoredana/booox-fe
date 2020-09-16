import React, { useState, Link } from "react";
import "../App.css";
import Button from "./Button";
import Navigation from "./Navigation";
import SearchResults from "./SearchResults";
import Login from "./Login";




const HomePage = (props) => {
  const [classNam, setClassname] = useState(false);

const changeClassname = ( ) => {
  
  if (classNam === false) {
    setClassname(true)
  }
  else setClassname(false)
}




  return (
    
      <div className="home-page">
        <div className="home-page-up">
        

        <h1>NO BOOKS SHOULD EVER LAY IDLE</h1>
        
        </div>

        <div className="home-page-bottom">
          <div>
          <SearchResults />
          </div>
        </div>

        <div className="footer"></div>
      </div>
    
  );
};

export default HomePage;
