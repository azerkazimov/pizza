import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-2">
            <Link to="main" className="logo">
              <img src={logo} alt="Pizza" />
            </Link>
          </div>
          <div className="col-6 col-lg-2">
            <ul>
              <li>Home</li>
              <li>To order</li>
              <li>About us</li>
              <li>Event</li>
              <li>Menu</li>
            </ul>
          </div>
          <div className="col-6 col-lg-2">
            <ul>
              <li>Events</li>
              <li>3 Pizza 1 Free Coffee</li>
              <li>2 Pizza for 1 Price</li>
              <li>Kitchen tour</li>
            </ul>
          </div>
          <div className="col-6 col-lg-2">
            <ul>
              <li>Menu</li>
              <li>Show All</li>
              <li>Seaproducts</li>
              <li>Vegan</li>
              <li>Meat</li>
            </ul>
          </div>
          <div className="col-6 col-lg-2">
            <ul>
              <li>About Us</li>
              <li>Our History</li>
              <li>Why We?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
