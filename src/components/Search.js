import React, { useState } from "react";
import "../App.css";
import Button from "./Button";
import search from "./fotos/search.png";

const Search = (props) => {
  const [inputValue, setInputValue] = useState("");

  // const handleOnChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.search(inputValue);
  };

  //   const handleOnSubmit = async (event) => {
  //     await fetch("/search", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       // We convert the React state to JSON and send it as the POST body
  //       body: JSON.stringify(inputValue)
  //     }).then(function (response) {
  //       console.log(response);
  //       response.json();
  //     })

  //     event.preventDefault();
  //   };

  //   const handleOnSubmit = (event) => {
  //     event.preventDefault();
  //

  //   };

  return (
    <div className="form-wrapper">
      {/* <a href="#"> <img class="voice" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png" title="Search by Voice"></a>
    </div>  */}

      <form onSubmit={handleOnSubmit} className="search-form">
        <div className="searchbar">
          <input
            type="text"
            name="search"
            id="search"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            placeholder="Search for Books"
            className="searchbar-input"
          />
          <div className="search-image-div">
            <a href="https://google.com">
              {" "}
              <img className="voice" alt="" src={search} />
            </a>
          </div>
        </div>

        <div>
          <Button buttonName="submit" />
        </div>
      </form>
    </div>
  );
};

export default Search;
