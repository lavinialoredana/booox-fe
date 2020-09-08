import React from "react";
import Table from "../components/Table";
import Search from "../components/Search";

const books = [
  {
    owner: "Jorge",
    author: "Frank Herbert",
    title: "Dune",
    language: "English",
  },

  {
    owner: "Cinderella",
    author: "Frank Herbert",
    title: "Dune",
    language: "English",
  },

  {
    owner: "Alice",
    author: "Frank Herbert",
    title: "The Great Dune Trilogy",
    language: "English",
  },

  {
    owner: "Alice",
    author: "Frank Herbert",
    title: "La Casa Atreides",
    language: "Spanish",
  },
];

function Books() {
  return (
    <div>
      <Search />
      <Table books={books} />
    </div>
  );
}

export default Books;
