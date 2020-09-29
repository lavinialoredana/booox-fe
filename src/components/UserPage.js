import React, { useState, useEffect, Fragment } from "react";
import {Link} from "react-router-dom";
 import Delete from './Delete';
import "./UserPage.css";

const UserPage = (props) => {
  const [bookDetails, setBookDetails] = useState([]);

  const [renderOnDelete, setRenderOnDelete] = useState(false);
  const [displayMyBook, setDIsplayMyBook] = useState(false);
  const [displayMyRequests, setDisplayMyRequest] = useState(false);


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
  }, [userDetails.id, renderOnDelete]);

  return (
    <Fragment>
      <h3>back</h3>
    <div className="user-page">
    
      <div className="user-page-1" >
      
        
      <div className="user-page-1-child" ><Link to="/userprofile">Profile Area</Link></div> 
       <div className="user-page-1-child user-page-1-child-2 " onClick={showBooksFunction}>See all my books/requests</div>
       <div className="user-page-1-child" ><Link to="/bookupload">Upload My Book</Link></div>
       <div className="user-page-1-child" onClick={showMyRequest} >My requests status</div>
       <div className="user-page-1-child" ><Link to="/">Back to homepage</Link></div>
       
       
      </div>

      <div className="user-page-2">
        <div className="user-page-2-details">
      <h1> Welcome to Boox <i className='fas'>&#xf406;</i> {userDetails.name} </h1>
        <h2>Hello {userDetails.name}. Welcome to your member area!
          Here you can find the details on your account status, your book status and so on.
          To Use the user features you can go to the user menu that is on the left side of the navigation bar.bla bla bla 
        </h2>
        <div className="user-page-1-child">Total Books owned : {bookDetails.length}</div>
        </div>
        
        <div className="user-page-2-books">
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
            <div className="single-book-text-child">
            <Link to={"/mybook/" + any.books_id}>
             open Book
            </Link>
              
            </div>
            </div>
            <div className="single-book-photo"></div>
            
          </div>
        )) : null}
        
        </div>
      { displayMyRequests ? <div className="single-book-details myrequests">
        <div>myrequest1</div>
        <div>myrequest2</div>
        <div>myrequest3</div>
      </div> : null}
      </div>
    </div>
  </Fragment>);
};

export default UserPage;
