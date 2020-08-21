import React from "react";
import "./App.css";

import BookUpload from "./components/BookUpload";

function App() {
  return (
    <div className="main-app">
      <main className="homepage-main">
        <BookUpload />
      </main>
    </div>
  );
}

export default App;
