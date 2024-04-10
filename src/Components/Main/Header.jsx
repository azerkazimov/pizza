import React from "react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import pizza from "../../images/main-banner.png";
import slice from "../../images/pizza-slice.png";
import fries from "../../images/fries.png";

function Header() {
  return (
    <div id="header">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 p-5 flex-container flex-column flex-justify-center flex-align-center">
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
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <div className="btn-order">
                  <Button name="To order" />
                  <div className="btn btn-transparent">Pizza menu</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="header-image">
              <div className="slice">
                <img src={slice} alt="Pizza souse" />
              </div>
              <div className="pizza">
                <img src={pizza} alt="Pizza souse" />
              </div>
              <div className="fries">
                <img src={fries} alt="Pizza souse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
