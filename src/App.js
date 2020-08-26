import React, { useState } from "react";
import "./App.css";

import BookUpload from "./components/BookUpload";
import Books from "./components/Books";
import Authors from "./components/Authors";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Switch from "react-bootstrap/esm/Switch";

function App() {
  return (
    <BrowserRouter>
      <div className="main-app">
        <main class="homepage-main">
          <h1 className="m3 d-flex justify-content-center"> Real Books</h1>
          <h3 className="m3 d-flex justify-content-center">
            {" "}
            Exchange books. Real books. The ones with scribbles, dust and
            (wink!) bookmarks!{" "}
          </h3>
          <NavigationBar />
          <BookUpload />

          <Switch>
            <Route path="/" component={BookUpload} exact />
            <Route path="/books" component={Books} />
            <Route path="/authors" component={Authors} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
