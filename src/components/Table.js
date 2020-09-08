import React, { Component } from "react";
import "../App.css";


class Table extends Component {
  renderTableData() {
    return this.props.books.map((book, index) => {
      const { owner, author, title, language } = book; //destructuring
      // when I'm gonna fetch the be database I need to change index for id
      return (
        <tr key={index}> 
          <td>{owner}</td>
          <td>{author}</td>
          <td>{title}</td>
          <td>{language}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.props.books[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    return (
      <div>
        <h1 id="title">React Dynamic Table</h1>
        <table id="books">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
