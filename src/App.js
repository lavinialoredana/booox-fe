import React, { useState } from "react";
import "./App.css";


import BookUpload from "./components/BookUpload";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
// import NavigationBar from "./components/NavigationBar";


function App() {
  return (
   
    <div className="main-app">
      <main class="homepage-main">
      <h3 className= "m3 d-flex justify-content-center"> Real Books</h3>
    <h5 className= "m3 d-flex justify-content-center"> Exchange books. Real books. The ones with scribbles, dust and (wink!) bookmarks! </h5>
       {/* <NavigationBar/> */}
        <BookUpload />
      </main>
    </div>
  );
}

export default App;
