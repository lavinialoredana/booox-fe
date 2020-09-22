import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import "../App.css";
import Search from "./Search";
import Delete from "./Delete";

const SearchResults = () => {
  const [finalSearchValue, setFinalSearchValue] = useState("");

  const [fetchedData, setFetchedData] = useState([]);
  console.log(fetchedData);

  const [renderOnDelete, setRenderOnDelete] = useState(false);


  const [comment, setComment] = useState("");
  const handleOnChange = (event) => {
    setComment(event.target.value);
  }

  


  useEffect(()  => {
    fetch(`/search?q=${finalSearchValue}`)
      .then((res) => res.json())
      .then((result) => setFetchedData(result))
      .catch((error) => console.error(error));
  }, [finalSearchValue, renderOnDelete]);

  const changeDeleteState = ( ) => {
    if (renderOnDelete === false){
      setRenderOnDelete(true);

    }

    else {
      setRenderOnDelete(false);
    }
    console.log(renderOnDelete);
  }

 
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

      return fetchedData.map((any) => {
        return (
          <div className="single-book-details">
             <Link to={'/book/' + any.id}><button>open</button></Link>
            <Delete idToDelete={any.id} reRenderFunction={changeDeleteState}/>
            <div><b>Title :</b> {any.title}</div>
            <div><b>Author :</b> {any.author}</div>
            <div><b>Published date:</b> {any.published_date}</div>
            <div><b>Publisher:</b> {any.publisher}</div>
            <div><b>Subtitle :</b>{any.subtitle}</div>
            <div><b>Language:</b> {any.language}</div>
            <div><b>ISBN :</b>{any.isbn}</div>

            <form>
              <input
              type="text"
              id="book-title"
              name="title"
              onChange={handleOnChange}
              value={comment}></input>
              <button >comment</button>
            </form>
          </div>  
        );
      });

  };

  return (
    <div className="search-results">
        <Search search={setFinalSearchValue} />

      <div className="search-results-display">
      {DisplayAll()} 
      </div>
    </div>
  );
};

export default SearchResults;
