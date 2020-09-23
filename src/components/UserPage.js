import React, { useState, useEffect } from "react";
import "../App.css";

import Delete from "./Delete";

const UserPage = (props) => {
  const [bookDetails, setBookDetails] = useState([]);

  const [renderOnDelete, setRenderOnDelete] = useState(false);

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
      <div className="user-page-left">
        <h1> Welcome to Boox </h1>
        <h2>{userDetails.name}</h2>
        <h3>Home</h3>
        <h3>My books</h3>
        <h3>Messages</h3>
        <h3>Update info</h3>
        <h3>Update Password</h3>
      </div>

      <div className="user-page-right">
        <h1> Logged in as {userDetails.user_name} </h1>
        <h2>Total Books owned : {bookDetails.length}</h2>

        {bookDetails.map((any) => (
          <div key={any.id} className="single-book-details">
            <Delete idToDelete={any.id} reRenderFunction={changeDeleteState} />
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
        ))}
      </div>
    </div>
  );
};

export default UserPage;
