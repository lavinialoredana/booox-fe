import React, { useState, useEffect } from "react";
import "../App.css";
import Search from "./Search";
import Delete from "./Delete";

const SearchResults = () => {
  const [finalSearchValue, setFinalSearchValue] = useState("");

  const [fetchedData, setFetchedData] = useState([]);

  const [renderOnDelete, setRenderOnDelete] = useState(false);

  useEffect(() => {
    fetch(`/search?q=${finalSearchValue}`)
      .then((res) => res.json())
      .then((result) => setFetchedData(result))
      .catch((error) => console.error(error));
  }, [finalSearchValue, renderOnDelete]);

  const changeDeleteState = () => {
    if (renderOnDelete === false) {
      setRenderOnDelete(true);
    } else {
      setRenderOnDelete(false);
    }
    console.log(renderOnDelete);
  };

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
    if (finalSearchValue === "") {
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
            <Delete idToDelete={any.id} reRenderFunction={changeDeleteState} />
            <div>
              <b>Title :</b> {any.title}
            </div>
            <div>
              <b>Author :</b> {any.author}
            </div>
            <div>
              <b>Published date:</b> {any.published_date}
            </div>
            <div>
              <b>Publisher:</b> {any.publisher}
            </div>
            <div>
              <b>Subtitle :</b>
              {any.subtitle}
            </div>
            <div>
              <b>Language:</b> {any.language}
            </div>
            <div>
              <b>ISBN :</b>
              {any.isbn}
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className="search-results">
      <Search search={setFinalSearchValue} />
      <div className="search-results-display">{DisplayAll()}</div>
    </div>
  );
};

export default SearchResults;
