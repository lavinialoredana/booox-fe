import React, { useState } from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import BookUpload from "./components/BookUpload";

// import Page2 from "./components/Page2";
// import Page3 from "./components/Page3";
// import NavigationBar from "./components/NavigationBar";

import SearchResults from "./components/SearchResults";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import Login from "../src/components/Login"
import SignUp from "../src/components/SignUp";
import LoggedInNavigation from "./components/LoggedInNavigation";
import UserPage from "./components/UserPage";


function App() {



  return (
    <Router>
      <div>
      { window.location.pathname === "/loggedIn/" ? <LoggedInNavigation /> : <Navigation />   }
        <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/loggedIn/" component={UserPage} />
      </Switch>


        
    </div>
    </Router>
  );
}

export default App;
