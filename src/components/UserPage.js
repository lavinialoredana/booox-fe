import React, { useState, useEffect, Fragment } from "react";
import {Link} from "react-router-dom";
 import Delete from './Delete';
import "./UserPage.css";
import image1 from './fotos/book.jpg';

const UserPage = (props) => {
  const [bookDetails, setBookDetails] = useState([]);

  const [renderOnDelete, setRenderOnDelete] = useState(false);
  const [displayMyBook, setDIsplayMyBook] = useState(false);
  const [displayMyRequests, setDisplayMyRequest] = useState(false);
  const [myPendingRequests, setMyPendingRequest] = useState([]);
  const [myOutgoingPendingRequest, setMyOutgoingPendingRequest ] = useState([]);
  
  console.log(myPendingRequests);

  let color = "nogreen";

  function toGreen ( ) {

    return color = "green"
  }

  function toRed ( ) {
    return color = "red"
  }

  function toGrey ( ) {
    return color = "grey"
  }




  const showBooksFunction = () => {
    if (!displayMyBook){
      setDIsplayMyBook(true)
      setDisplayMyRequest(false);
    }
    if (displayMyBook) {setDIsplayMyBook(false)};
  }

  const showMyRequest = () => {
    if (!displayMyRequests){
      setDisplayMyRequest(true);
      setDIsplayMyBook(false);
    }
    if (displayMyRequests) {setDisplayMyRequest(false)};
  }

  const changeDeleteState = () => {
    if (renderOnDelete === false) {
      setRenderOnDelete(true);
    } else {
      setRenderOnDelete(false);
    }
    console.log(renderOnDelete);
  };

  const username = sessionStorage.getItem("token");
  const userDetails = JSON.parse(atob(username.split(".")[1])).user;

  useEffect(() => {
    fetch(`/${userDetails.id}/books`)
      .then((res) => res.json())
      .then((result) => setBookDetails(result))
      .catch((error) => console.error(error));

      fetch(`/myincomingrequests?q=${userDetails.id}`)
      .then((res) => res.json())
      .then((result) => setMyPendingRequest(result))
      .catch((error) => console.error(error));

      fetch(`/myoutgoingrequests?q=${userDetails.id}`)
      .then((res) => res.json())
      .then((result) => setMyOutgoingPendingRequest(result))
      .catch((error) => console.error(error));
    
  }, [])
  
  
  
  ;

  return (
    <Fragment>
    <div className="user-page">
    <div>
      <h1> Welcome to Boox <i className='fas'>&#xf406;</i> {userDetails.name} </h1>
        <h2 style={{fontSize: "2rem"}}>Hello {userDetails.name}. Welcome to your member area!
          Here you can find the details on your account status, your book status and so on.
          To Use the user features you can go to the user menu that is on the left side of the navigation bar.bla bla bla 
        </h2>
      </div>
    
      <div className="user-page-1" >
      
        
      <div className="user-page-1-child" ><Link to="/userprofile">Profile Area</Link></div> 
       <div className="user-page-1-child user-page-1-child-2 " onClick={showBooksFunction}>See all my books <b>↓</b></div>
       <div className="user-page-1-child" ><Link to="/bookupload">Upload My Book</Link></div>
       <div className="user-page-1-child" onClick={showMyRequest} >Request I made</div>
       <div className="user-page-1-child" ><Link to="/">Back to homepage</Link></div>
       
       
      </div>

  <div className="user-page-2">
        <div className="user-page-2-details">
        <div className="user-page-1-child">Total Books owned : {bookDetails.length}</div>
        <div>
        

        <div>
        <h2 className="user-page-1-child-all-requests">Lists Of Request I got </h2>
        
          { myPendingRequests.map( any => {
            return any.status === "Pending" ?  <div className="user-page-1-child-pendingrequests requestStatus">
              
               <div><b>Request From User :</b> {any.name}</div><div><b>Request On Book :</b>{any.title}</div><div><b>Request Status : </b> {any.status}</div><div><b>Requesting User Email :</b> {any.email}</div><div><Link to={"/mybook/" + any.id}>VIEW DETAILS / ACCEPT / REJECT</Link></div></div> : null } 
          )}
        </div>
        </div>
        </div>

        
        
        <div className="user-page-2-books">

                </div>
      
      </div>
      <div className="single-book-details-wrap">
      { displayMyBook ? bookDetails.map((any) => (
          <div key={any.id} className="single-book-details">
            <Delete idToDelete={any.id} reRenderFunction={changeDeleteState} />
            <div className="single-book-text">
            <div className="single-book-text-child">
              <b>Title :</b> {any.title}
            </div>
            <div className="single-book-text-child">
              <b>Author :</b> {any.author}
            </div>
            <div className="single-book-text-child">
              <b>Published date:</b> {any.published_date}
            </div>
            <div className="single-book-text-child">
              <b>Publisher:</b> {any.publisher}
            </div>
            <div className="single-book-text-child">
              <b>Subtitle :</b>
              {any.subtitle}
            </div>
            <div className="single-book-text-child">
              <b>Language:</b> {any.language}
            </div>
            <div className="single-book-text-child">
              <b>ISBN :</b>
              {any.isbn}
            </div >
            <div className="single-book-text-child user-page-1-child-button ">
            <Link to={"/mybook/" + any.books_id}>
             VIEW DETAILS / ACCEPT / REJECT
            </Link>
              
            </div>
            </div>
            <div className="single-book-photo"><img style={{width:"100%", height:"inherit"}} className="lower-body-image" src={image1}></img></div>
            
          </div>
        )) : null}

{ displayMyRequests ? <div className="single-book-details myrequests">
        <h2>REQUEST I MADE</h2>
        {myOutgoingPendingRequest.map( (any) => {
        if (any.status === "accepted"){
          toGreen()
        }
        else if( any.status === "rejected"){
          toRed()
        }
        else if (any.ststus === "Pending"){
          toGrey()
        }
        return <div key={any.id} className={`user-page-1-child requestStatus ${color}`} ><div><b>Request To User :</b> {any.name}</div> <div><b>Request On Book Title :</b>{any.title}</div><div><b>Request Status : </b> {any.status}</div><div><b> Book Owner Email :</b> {any.email}</div></div>})}
      </div> : null}
        

      </div>
    </div>
  </Fragment>);
};

export default UserPage;
