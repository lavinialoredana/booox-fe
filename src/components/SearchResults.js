import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Search from "./Search";

const SearchResults = () => {
  const Heading = [
    "TITLE",
    "AUTHOR",
    "BOOK TITLE",
    "LANGUAGE",
    "VIEW / Borrow",
  ];
  const [finalSearchValue, setFinalSearchValue] = useState("");

  const [fetchedData, setFetchedData] = useState([]);

  // const [renderOnDelete, setRenderOnDelete] = useState(false);

  const [preloadedResults, setPreloadedResults] = useState([]);

  useEffect(() => {
    fetch(`/books`)
      .then((res) => res.json())
      .then((result) => setPreloadedResults(result))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch(`/search?q=${finalSearchValue}`)
      .then((res) => res.json())
      .then((result) => setFetchedData(result))
      .catch((error) => console.error(error));
  }, [finalSearchValue]);

  // const changeDeleteState = () => {
  //   if (renderOnDelete === false) {
  //     setRenderOnDelete(true);
  //   } else {
  //     setRenderOnDelete(false);
  //   }
  //   console.log(renderOnDelete);
  // };

  const resultRender = () => {
    if (fetchedData.length > 0) {
      return (
        <div className="search-results-table-container">
          <table className="table">
            <thead>
              <tr className="table-th-tr">
                {Heading.map((any, index) => (
                  <td key={index}>{any}</td>
                ))}
              </tr>
            </thead>

            <tbody>
              {fetchedData.map((any) => {
                return (
                  <tr key={any.id} className="table-tb-tr">
                    <td className="table-td"> {any.id}</td>
                    <td> {any.author}</td>
                    <td> {any.title}</td>
                    <td> {any.language}</td>
                    <td>
                      <Link to={"/book/" + any.id}>
                        <button>Open</button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <div>please enter another keyword</div>;
    }
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

  return (
    <div className="home-page-search-results">
      <Search search={setFinalSearchValue} />

      {/* <Delete idToDelete={any.id} reRenderFunction={changeDeleteState} /> */}
      <div className="motto-container">
        <div className="motto-container-child">
          <h3>Exchange books. Real books.</h3>
          <h3>The ones with scribbles, dust and wink!</h3>
          <h3>bookmarks!</h3>
        </div>
      </div>
      <div className="results-status">
        {finalSearchValue ? (
          <h2>/ RESULTS</h2>
        ) : (
          <h2 className="results-status">/ BOOKS </h2>
        )}
      </div>
      {fetchedData.length > 0 ? resultRender() : null}
      <div>
        {!finalSearchValue
          ? preloadedResults.map((any) => {
              return (
                <li key={any.id} className="search-default-books-div">
                  •&nbsp;&nbsp;{any.title} - {any.author}, {any.language}
                </li>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default SearchResults;
