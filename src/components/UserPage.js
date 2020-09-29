import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Delete from "./Delete";
import "../App.css";

const UserPage = (props) => {
  const [bookDetails, setBookDetails] = useState([]);

  const [renderOnDelete, setRenderOnDelete] = useState(false);
  const [displayMyBook, setDIsplayMyBook] = useState(false);

  const showBooksFunction = () => {
    if (!displayMyBook) {
      setDIsplayMyBook(true);
    }
    if (displayMyBook) {
      setDIsplayMyBook(false);
    }
  };

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
    <div className="user-page">
      <Link to="/">
        <div className="back-button">Back to homepage</div>
      </Link>
      <div className="user-page-1">
        <h1>
          {" "}
          Welcome to Boox <i className="fas">&#xf406;</i> {userDetails.name}{" "}
        </h1>
        <h2>
          Hello {userDetails.name}. Welcome to your member area! Here you can
          find the details on your account status, your book status and so on.
          To Use the user features you can go to the user menu that is on the
          left side of the navigation bar.bla bla bla
        </h2>
      </div>

      <div className="user-page-2">
        <button>Total Books owned : {bookDetails.length}</button>
        <button onClick={showBooksFunction}>VIEW all my books </button>
      </div>

      <div className="user-page-3-open  ">
        {displayMyBook
          ? bookDetails.map((any) => (
              <div key={any.id} className="single-book-details">
                <Delete
                  idToDelete={any.id}
                  reRenderFunction={changeDeleteState}
                />
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
                  <b>Subtitle :</b>
                  {any.subtitle}
                </div>
                <div>
                  <b>Language:</b> {any.language}
                </div>
                <div>
                  <b>ISBN :</b>
                  {any.isbn}
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default UserPage;
