import React from "react";
import "./App.css";

import Main from "./components/Main";
import BookUpload from "./components/BookUpload";
import Books from "./pages/Books";
import Authors from "./pages/Authors";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Table from "./components/Table";

// import Switch from "react-bootstrap/esm/Switch";

function App() {
  return (
    <BrowserRouter>
      <div className="main-app">
        <NavigationBar />
        <Main />

        <Switch>
          <Route path="/" component={BookUpload} exact />
          <Route path="/books" component={Books} />
          <Route path="/authors" component={Authors} />
          <Route path="/table" component={Table} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
