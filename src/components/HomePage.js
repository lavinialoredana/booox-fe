import React from "react";
import "../App.css";

import SearchResults from "./SearchResults";

const HomePage = (props) => {
  // const [classNam, setClassname] = useState(false);

  return (
    <div className="home-page">
      <div className="home-page-up">
        <h1>NO BOOKS SHOULD EVER LAY IDLE</h1>
      </div>

      <div className="home-page-bottom">
        <div>
          <SearchResults />
        </div>
      </div>

      <div className="footer"></div>
    </div>
  );
};

export default HomePage;
