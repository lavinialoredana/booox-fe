import React from "react";
import "../App.css";
// import LoggedInNavigation from './LoggedInNavigation';
// import Search from './SearchResults';
// import SearchResults from './SearchResults';
import BookUpload from "./BookUpload";

const UserPage = (props) => {
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
