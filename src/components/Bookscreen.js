import React, { useState, useEffect } from "react";
import "../App.css";


 function Bookscreen(props){
  const id = props.match.params.id;

  const [fetchedData, setFetchedData] = useState([]);
  console.log(fetchedData);
  
  useEffect(()  => {
    fetch(`/filterwithid?q=${id}`)
      .then((res) => res.json())
      .then((result) => setFetchedData(result))
      .catch((error) => console.error(error));
  }, []);

  const DisplayAll = () => {

      return fetchedData.map((any) => {
        return (
          <div className="single-book-details">
            <div>{any.title}</div>
            <div>{any.author}</div>
            <div>{any.published_date}</div>
            <div>{any.publisher}</div>
            <div>{any.subtitle}</div>
            <div>{any.language}</div>
            <div>{any.isbn}</div>
            <h1>Individual book page : Ready to be designed / ps: this is not the final design</h1>
          </div>
        )
      }
      )

}

  return (
    <div>
      {DisplayAll()}
    </div>
  )

   

};

export default Bookscreen;
