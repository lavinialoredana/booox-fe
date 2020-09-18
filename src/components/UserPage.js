import React from "react";
import "../App.css";
// import LoggedInNavigation from './LoggedInNavigation';
// import Search from './SearchResults';
// import SearchResults from './SearchResults';
import BookUpload from "./BookUpload";

const UserPage = (props) => {
  const username = sessionStorage.getItem("token");
  // console.log(username);
  console.log(JSON.parse(atob(username.split(".")[1])));

  return (
    <div className="user-page">
      <div className="user-page-left"></div>

      <div className="user-page-right">
        <BookUpload />
      </div>
    </div>
  );
};

export default UserPage;
