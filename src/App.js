import React from "react";
import "./App.css";

import BookUpload from "./components/BookUpload";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div className="main-app">
      <main className="homepage-main">
        <BookUpload />

        <div>
        <SearchResults />
        </div>
      </main>
    </div>
  );
}

export default App;
