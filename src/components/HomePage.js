import React, { Fragment } from "react";
import "./HomePage.css";

import SearchResults from "./SearchResults";

const HomePage = (props) => {
  // const [classNam, setClassname] = useState(false);

  return (
    <Fragment>    <div className="home-page">
      <div className="home-page-header">
        <h1>NO BOOK</h1>
        <h1>SHOULD EVER LAY</h1>
        <h1>IDLE</h1>
      </div>

      <div className="home-page-search">
            
            <SearchResults />
      </div>

      
    </div>
    <div className="lower-body">
      
    </div>
    <div className="footer"></div>
    </Fragment>

  );
};

export default HomePage;
