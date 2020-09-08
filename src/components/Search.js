import React, { Component } from "react";
import "../App.css";

export class BooksList extends Component {
  state = {
    
    searchTerm: ""
  };

  editSearchTerm = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  dynamicSearch = () => {
    return this.state.data.filter(
      (book) =>
        book.title
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase()) ||
        book.owner
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  render() {
    return (
      <div className="allBooks-main-container">
        <div className="booksForm-container">
          <h2> / My Results</h2>
          <input/>
        </div>
      </div>
    );
  }
}

export default BooksList;
