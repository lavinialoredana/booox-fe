import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import "./BookScreen.css";
import "./MyBookScreen.css";
import image1 from './fotos/image.png';
import { render } from "@testing-library/react";

function MyBookScreen(props) {
  const id = props.match.params.id;

  const [fetchedData, setFetchedData] = useState([]);


  const name = sessionStorage.getItem("token");
  
  const loggeduserId = JSON.parse(atob(name.split(".")[1])).user.id;

  

  const data = {
    bookId : id,
    userId : loggeduserId
  }

  const [myBookRequests, setMyBookRequests] = useState([]);
  console.log("mybookrequests", myBookRequests);


  const [requestStatus, setRequestStatus] = useState(false);
   



  const handlerequestAccept = (id) => {

  fetch(`http://localhost:3001/request/accept?q=${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" }
    })
     if (requestStatus === false ){
       setRequestStatus(true)
     }
     else setRequestStatus(false)

    
};

const handlerequestReject = (id) => {

  fetch(`http://localhost:3001/request/reject?q=${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" }
    })
    if (requestStatus === false ){
      setRequestStatus(true)
    }
    else setRequestStatus(false)
};
   
   useEffect(() => {
    fetch(`http://localhost:3001/myBookRequestStatus?q=${id}`)
      .then((res) => res.json())
      .then((result) => {
        setMyBookRequests(result);
      })
      .catch((error) => console.error(error));
  }, [id]);




  useEffect(() => {
    fetch(`/book?q=${id}`)
      .then((res) => res.json())
      .then((result) => {
        setFetchedData(result);
      })
      .catch((error) => console.error(error));
  }, [id, requestStatus]);

  console.log("fetcheddATA", fetchedData);
  

  const DisplayAll = () => {

    return fetchedData.map((any) => {
      return (
        <Fragment key={any.id}>
        <div className="individual-book-top"><h3 >- My Book -</h3></div>
        <div key={any.id} className="my-book">
          <div className="individual-book-child individual-book-child-first ">

          <div className="individual-book-card-1">
          <h2>/ {any.title}</h2>
          <p>By {any.author}</p>
          </div>

          <div className="individual-book-card-2">
            <p>Dune is a 1965 science fiction novel by American author Frank Herbert, originally published as two separate serials in Analog magazine. It tied with Roger Zelazny’s This Immortal for the Hugo Award in 1966, and it won the inaugural Nebula Award for Best Novel.</p>
          </div>


          <div className="individual-book-card-3">
          <div><strong><span>Language:&nbsp;</span></strong>{any.language}</div>
          <div><strong><span>Publisher:&nbsp;</span></strong>{any.publisher}</div>
          <div><strong><span>Published Date:&nbsp;</span></strong>{any.published_date}</div>
          <div><strong><span>ISBN:&nbsp;</span></strong>{any.isbn}</div>
          </div>
          </div>
          <div className="individual-book-child individual-book-child-second">
            <div className="individual-book-child-1"><img src={image1} alt=""></img></div>

          </div>
        </div>
        
          {myBookRequests.map((any) => {
           return  <div  className="requests-card">
              <div className="request-card-child">User Name : {any.name}</div>
              <div className="request-card-child">User Email : {any.email}</div>
              <div className="request-card-child">Request Status : {any.status === "Pending" ? <span>Pending</span> : <span>Already Accepted</span>}</div>
              { any.status == "Pending" ?
              <Fragment>
              <button className="requestcard-button" onClick={ () => {handlerequestAccept(any.id)}}>Accept</button>
              <button className="requestcard-button" onClick={ () => {handlerequestReject(any.id)}}>Reject</button>
              </Fragment>

               : null}
              </div>
          })}
        
        </Fragment>
      );
      
    });
  };

  return <div className="individual-book-container-wrapper"><div className="individual-book-container">{DisplayAll()}</div></div>;
}

export default MyBookScreen;
