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


function App() {
  return (
    <Router>
      <div>
      <Route path="/landingPage"  component={Navigation} />
      <Route component={HomePage} />

        
    </div>
    </Router>
  );
}

export default App;
