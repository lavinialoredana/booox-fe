import React, { useState } from "react";
import "../App.css";
import Button from "./Button";

const Search = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");

  const handleOnChange = (event) => {
    const newData = event.target.value;
    setInputValue(newData);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.search(inputValue);
    setInputValue1("some");
  };

  return (
    <div className={inputValue1 ? "search search1" : "search"}>
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
