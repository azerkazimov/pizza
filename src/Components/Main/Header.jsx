import React from "react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";

import pizza from "../../images/main-banner.png";
import Banner from "../Banner/Banner";

function Header() {
  return (
    <div id="header">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6 p-5 flex-container flex-column flex-justify-center flex-align-center">
            <div className="header-content">
              <Heading head="The Faster Pizza Delivery" />
              <div className="container">
                <p>
                  We will deliver juicy pizza for your family in 30 minutes, if
                  the courier is late - pizza is free!
                </p>
                <p>Cookinkg process:</p>
                <iframe
                  src="https://www.youtube.com/embed/8Q_9h6VKm9c?si=hm2OmM08FRWLzDxU"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>

                <div className="btn-order">
                  <Button name="To order" />
                  <div className="btn btn-transparent">Pizza menu</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 p-3">
            <Banner pizza={pizza} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
