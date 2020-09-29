import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import BookUpload from "./components/BookUpload";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import Login from "../src/components/Login";
import SignUp from "../src/components/SignUp";
import LoggedInNavigation from "./components/LoggedInNavigation";
import UserPage from "./components/UserPage";
import Bookscreen from "./components/Bookscreen";
import SearchResults from "./components/SearchResults";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    sessionStorage.getItem("token");
    setIsAuthenticated(boolean);
  };

  return (
    <Router>
      {isAuthenticated ? (
        <LoggedInNavigation logoutfunction={setAuth} />
      ) : (
        <Navigation />
      )}
      <Switch>
        <Route
          exact
          path="/login"
          render={(props) =>
            !isAuthenticated ? (
              <Login {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/userprofile" />
            )
          }
        />
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/signup"
          render={(props) =>
            !isAuthenticated ? (
              <SignUp {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/userprofile" />
            )
          }
        />
        <Route
          exact
          path="/bookupload"
          render={(props) =>
            isAuthenticated ? (
              <BookUpload {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          exact
          path="/userprofile"
          render={(props) =>
            isAuthenticated ? (
              <UserPage {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route path="/book/:id" component={Bookscreen} />
        <Route exact path="/searchresults" component={SearchResults} />
      </Switch>
    </Router>
  );
}

export default App;
