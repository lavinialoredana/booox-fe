import React, { useState, useEffect } from "react";
import "../App.css";
import Search from "./Search";
import Delete from "./Delete";

const SearchResults = () => {
  const [finalSearchValue, setFinalSearchValue] = useState("");
  console.log("finaaalsearchvalue", finalSearchValue);

  const [fetchedData, setFetchedData] = useState([]);

  const [renderOnDelete, setRenderOnDelete] = useState();

  useEffect(() => {
    fetch(`/search?q=${finalSearchValue}`)
      .then((res) => res.json())
      .then((result) => setFetchedData(result))
      .catch((error) => console.error(error));
  }, [finalSearchValue, renderOnDelete]);

  console.log("fetchedData", fetchedData);
  console.log(finalSearchValue);

  //   const filtered = fetchedData.filter(
  //     (any) =>
  //       any.author.toLowerCase().includes(finalSearchValue) ||
  //       any.title.toLowerCase().includes(finalSearchValue) ||
  //       any.language.toLowerCase().includes(finalSearchValue) ||
  //       any.publisher.toLowerCase().includes(finalSearchValue) ||
  //       any.subtitle.toLowerCase().includes(finalSearchValue)
  //   );
  //   console.log("filtered", filtered);

  const DisplayAll = () => {
    if (finalSearchValue === "*") {
      return fetchedData.map((any) => {
        return (
          <div className="single-book-details">
            <Delete />
            <div>{any.title}</div>
            <div>{any.author}</div>
            <div>{any.published_date}</div>
            <div>{any.publisher}</div>
            <div>{any.subtitle}</div>
            <div>{any.language}</div>
            <div>{any.isbn}</div>
          </div>
        );
      });
    } else {
      return fetchedData.map((any) => {
        return (
          <div className="single-book-details">
            <Delete idToDelete={any.id} reRenderFunction={setRenderOnDelete} />
            <div>Title : {any.title}</div>
            <div>Author : {any.author}</div>
            <div>Published date: {any.published_date}</div>
            <div>Publisher: {any.publisher}</div>
            <div>Subtitle :{any.subtitle}</div>
            <div>Language: {any.language}</div>
            <div>ISBN : {any.isbn}</div>
          </div>
        );
      });
    }
  };

  return (
    <div className="search-results">
      <div>
        <Search search={setFinalSearchValue} />
      </div>
      {finalSearchValue ? DisplayAll() : <p>"type something"</p>}
    </div>
  );
};

export default SearchResults;
