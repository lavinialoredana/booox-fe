import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Search from "./Search";
import Delete from "./Delete";

const SearchResults = () => {
  const Heading = [
    "OWNER",
    "AUTHOR",
    "BOOK TITLE",
    "LANGUAGE",
    "VIEW DETAILS"
  ];
  const [finalSearchValue, setFinalSearchValue] = useState("");

  const [fetchedData, setFetchedData] = useState([]);

  const [renderOnDelete, setRenderOnDelete] = useState(false);

  useEffect(() => {
    fetch(`/search?q=${finalSearchValue}`)
      .then((res) => res.json())
      .then((result) => setFetchedData(result))
      .catch((error) => console.error(error));
  }, [finalSearchValue, renderOnDelete]);
  
  console.log(fetchedData);

  const changeDeleteState = () => {
    if (renderOnDelete === false) {
      setRenderOnDelete(true);
    } else {
      setRenderOnDelete(false);
    }
    console.log(renderOnDelete);
  };

  const resultRender = ( ) => {
    if (fetchedData.length > 0) {
      return <div className="table-cover">
      <table className="table">
    <thead>
      <tr className="table-th-tr">
        {Heading.map((any, index) => (
          <td key={index}>{any}</td>
        ))}
      </tr>
    </thead>

    <tbody>
    {fetchedData.map( (any) => {
      return (<tr className="table-tb-tr">
      <td className="table-td">{any.title}</td>
      <td>{any.author}</td>
      <td>{any.subtitle}</td>
      <td>{any.language}</td>
      <td><Link to={"/book/" + any.id}>
             <button>open</button>
       </Link></td>
       
        </tr>)

    })}
    
    </tbody>
  </table>
  </div>
    }
  else {return <div>please enter another keyword</div>}
    
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

  return (
    <div className="search-results">
      <Search search={setFinalSearchValue} />
       
          {/* <Delete idToDelete={any.id} reRenderFunction={changeDeleteState} /> */}

         { fetchedData.length > 0 ? resultRender() : null }
    </div>
  );
};

export default SearchResults;
