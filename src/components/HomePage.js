import React, { useState } from "react";
import "../App.css";
import Button from "./Button";
import Navigation from "./Navigation";
import SearchResults from "./SearchResults";

const HomePage = (props) => {
  return (
    <div>
      <div className="home-page">
        <h1>No book should ever lay idle.</h1>
        <div>
          <button className="btn-borrow">Borrow a book</button>
          <button className="btn-lend">Lend a book</button>
        </div>

        <div className="search-results-div">
          <SearchResults />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
