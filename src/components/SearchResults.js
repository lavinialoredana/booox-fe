import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const SearchResults = (props) => {
  const Heading = [
    "OWNER",
    "AUTHOR",
    "BOOK TITLE",
    "LANGUAGE",
    "VIEW / Borrow",
  ];

  return props.location &&
    props.location.state.data &&
    props.location.state.data.length !== 0 ? (
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
          {props.location.state.data.map((any) => {
            return (
              <tr key={any.id} className="table-tb-tr">
                <td className="table-td"> {any.title}</td>
                <td> {any.author}</td>
                <td> {any.subtitle}</td>
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
  ) : (
    <div />
  );
};

export default SearchResults;
