import React, { useState } from "react";
import "../App.css";
import Button from "./Button";

const Search = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  console.log(inputValue);

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
    <div className="search">
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="search"></label>
        <input
          type="text"
          name="search"
          id="search"
          onChange={handleOnChange}
          value={inputValue}
          placeholder="Search for Books"
        />
        <Button buttonName="submit" />
      </form>
    </div>
  );
};

export default Search;
