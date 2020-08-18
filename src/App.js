import React, { useState } from "react";
import "./App.css";

import BookUpload from "./components/BookUpload";

function App() {
  return (
    <div className="main-app">
      <main class="homepage-main">
        <BookUpload />
      </main>
    </div>
  );
}

export default App;
