import React, { useState } from "react";
import "../App.css";
//import Navigation from "./Navigation";
import SearchResults from "./SearchResults";
import searchIcon from "./fotos/search.png";

const HomePage = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    fetch(`/search?q=${inputValue}`)
      .then((res) => res.json())
      .then((result) => setSearchResults(result))
      .catch((error) => console.error(error));

    setInputValue("");
  };

  return (
    <div className="home-page">
      <div className="home-page-up">
        <h1>NO BOOK SHOULD EVER LAY IDLE</h1>
      </div>

      <div className="home-page-bottom">
        <div className="form-wrapper">
          <form className="search-form">
            <div className="searchbar">
              <input
                type="text"
                name="search"
                id="search"
                onChange={handleInput}
                value={inputValue}
                placeholder="Search for Books"
                className="searchbar-input"
              />
              <div className="search-image-div">
                <a href="/search">
                  {" "}
                  <img className="voice" alt="" src={searchIcon} />
                </a>
              </div>
            </div>

            <button onClick={handleSearch} type="submit" className="button">
              Search
            </button>
          </form>
        </div>
        <SearchResults search={searchResults} />
      </div>

      <div className="footer"></div>
    </div>
  );
};

export default HomePage;
