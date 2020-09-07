import React from "react";
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


function App() {
  return (
    <Router>
      <div>
      <Navigation />  
        <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      </Switch>


        
    </div>
    </Router>
  );
}

export default App;
