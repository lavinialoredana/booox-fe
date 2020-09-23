import React, { useState, useEffect } from "react";
import "../App.css";

function Bookscreen(props) {
  const id = props.match.params.id;

  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetch(`/book/?q=${id}`)
      .then((res) => res.json())
      .then((result) => setFetchedData(result))
      .catch((error) => console.error(error));
  }, [id]);

  const DisplayAll = () => {
    return fetchedData.map((any) => {
      return (
        <div key={any.id} className="single-book-details">
          <div>{any.title}</div>
          <div>{any.author}</div>
          <div>{any.published_date}</div>
          <div>{any.publisher}</div>
          <div>{any.subtitle}</div>
          <div>{any.language}</div>
          <div>{any.isbn}</div>
          <h1>
            Individual book page : Ready to be designed / ps: this is not the
            final design
          </h1>
        </div>
      );
    });
  };

  return <div>{DisplayAll()}</div>;
}

export default Bookscreen;
