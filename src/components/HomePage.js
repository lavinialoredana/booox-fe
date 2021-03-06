import React, { Fragment } from "react";
import "./HomePage.css";
import image from "./fotos/5.jpg";
import image1 from "./fotos/6.jpg";

import SearchResults from "./SearchResults";

const HomePage = (props) => {
  // const [classNam, setClassname] = useState(false);

  return (
    <Fragment>
      {" "}
      <div className="home-page">
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
        <div className="lower-body-child-1">
          <div className="lower-body-child-1-child lower-body-child-1-child-1">
            <h3>HOW DOES IT</h3>
            <h3>WORK?</h3>
          </div>
          <div className="lower-body-child-1-child lower-body-child-1-child-2">
            <img className="lower-body-image" src={image} alt=""></img>
          </div>
          <div className="lower-body-child-1-child lower-body-child-1-child-3">
            Swap the books you’ve fallen out of love with for the books you want
            to read now. Search for your next favorite book, request it and
            enjoy it! Swapping or lending books is also good for the
            environment. Get green now! We are here to connect book lovers and
            swappers!
          </div>
        </div>
        <div className="lower-body-child-2">
          <div className="lower-body-child-2-child lower-body-child-2-child-1">
            <img className="lower-body-image" src={image1} alt=""></img>
          </div>
          <div className="lower-body-child-2-child lower-body-child-2-child-2">
            Swap the books you’ve fallen out of love with for the books you want
            to read now. Search for your next favorite book, request it and
            enjoy it! Swapping or lending books is also good for the
            environment. Get green now! We are here to connect book lovers and
            swappers!
          </div>
        </div>
      </div>
      <div className="footer">
        <h2 className="footer-child footer-child-h2">CONTACT</h2>
        <div className="footer-child-2">
          <h2 className="footer-child">Phone</h2>
          <p> 0034 697 874 032</p>
        </div>
        <div className="footer-child-3">
          <h2 className="footer-child">E-mail</h2>
          <p>roshan.sapkota2016@gmail.com</p>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
