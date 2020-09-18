import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import { Menu } from 'semantic-ui-react'
import HomePage from "./components/HomePage";
// import Navigation from "./components/Navigation";
import Login from "../src/components/Login";
import SignUp from "../src/components/SignUp";
// import LoggedInNavigation from "./components/LoggedInNavigation";
import UserPage from "./components/UserPage";
import NavBar from "./components/NavBar";
import LoginNav from "./components/LoginNav";

function App() {
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("/auth/verify", {
        method: "GET",
        headers: { token: sessionStorage.token },
      });

      const parseRes = await res.json();
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  return (
    <Router>
      {isAuthenticated ? <LoginNav logoutfunction={setAuth} /> : <NavBar />}

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
          path="/userprofile"
          render={(props) =>
            isAuthenticated ? (
              <UserPage {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </Switch>
    </Router>
  );
}

export default App;
