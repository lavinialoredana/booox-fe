import React, { useState } from "react";
import "../App.css";

const Search = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.search(inputValue);
  };

  return (
    <div className="search-form-container">
      {/* <a href="#"> <img class="voice" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png" title="Search by Voice"></a>
    </div>  */}
      <form onSubmit={handleOnSubmit} className="search-bar">
        
          <input
            type="text"
            name="search"
            id="search"
            onChange={handleOnChange}
            value={inputValue}
            placeholder="SEARCH FOR INSPIRATION ( BOOKS, AUTHORS, LANGUAGE, CATEGORY … )"
            className="searchbar-input"
          />
          
          <button>Search</button>
          


        
          
        
      </form>
    </div>
  );
};

export default Search;
