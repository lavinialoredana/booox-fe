import React, { Fragment, useEffect, useState } from "react";
import "../App.css";
// import LoggedInNavigation from './LoggedInNavigation';
// import Search from './SearchResults';
// import SearchResults from './SearchResults';
import BookUpload from "./BookUpload";

const UserPage = (props) => {
  const username = sessionStorage.getItem("token");
  // console.log(username);
  console.log(JSON.parse(atob(username.split(".")[1])).user.id);
  const userID = JSON.parse(atob(username.split(".")[1])).user.id;

  const [userBooks, setUserBooks] = useState([]);

  useEffect(() => {
    fetch(`/${userID}/books`)
      .then((res) => res.json())
      .then((result) => setUserBooks(result))
      .catch((error) => console.error(error));
  }, [userID]);

  console.log(userBooks);
  return (
    <div className="user-page">
      <div className="user-page-left"></div>

      <div className="user-page-right">
        <BookUpload />
        <Fragment>
          {userBooks.map((any) => {
            return (
              <div key={any.id} className="search-results">
                <div className="search-results-display">
                  <div className="single-book-details">
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
                      <b>Subtitle :</b> {any.subtitle}
                    </div>
                    <div>
                      <b>Language:</b> {any.language}
                    </div>
                    <div>
                      <b>ISBN :</b>
                      {any.isbn}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Fragment>
      </div>
    </div>
  );
};

export default UserPage;
