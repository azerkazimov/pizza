import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-2 offset-lg-1">
            <Link to="main" className="logo">
              <img src={logo} alt="Pizza" />
            </Link>
          </div>
          <div className="col-6 col-lg-2">
            <ul>
              <Link to="main">
                <li>Home</li>
              </Link>
              <li>To order</li>
              <li>About us</li>
              <li>Event</li>
              <li>Menu</li>
            </ul>
          </div>
          <div className="col-6 col-lg-2">
            <ul>
              <Link to="event">
                <li>Events</li>
              </Link>
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
        <div className="row">
          <div className="col-6">
            <div className="phone">
              <p>+7(937)333-55-33</p>
            </div>
          </div>
          <div className="col-6">
            <div className="sosial-links">
              <Link to="#">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link to="#">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link to="#">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
