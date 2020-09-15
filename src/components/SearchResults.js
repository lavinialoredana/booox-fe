import React from "react";
import "../App.css";

const SearchResults = ({ search }) => {
  return search.map((any) => {
    return (
      <div key={any.id} className="search-results">
        <div className="search-results-display">
          <div className="single-book-details">
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
              <b>Subtitle :</b> {any.subtitle}
            </div>
            <div>
              <b>Language:</b> {any.language}
            </div>
            <div>
              <b>ISBN :</b>
              {any.isbn}
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default SearchResults;
