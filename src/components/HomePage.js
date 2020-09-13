import React from "react";
import "../App.css";
// import Button from "./Button";
// import Navigation from "./Navigation";
import SearchResults from "./SearchResults";

const HomePage = (props) => {
  return (
    <div className="home-page">
      <div className="home-page-up">
        <h1>No BOOKS SHOULD EVER LAY IDLE</h1>
      </div>

      <div className="home-page-bottom">
        <SearchResults />
      </div>

      <div className="footer"></div>
    </div>
  );
};

export default HomePage;
