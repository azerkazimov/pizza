import React from "react";
import Heading from "../Heading/Heading";
import Banner from "../Banner/Banner";
import italian from "../../images/pizza/italian.png";
import cheese from "../../images/pizza/cheese.png";
import argentina from "../../images/pizza/argentina.png";
import tomato from "../../images/pizza/tomato.png";
import meat from "../../images/pizza/meet.png";
import about from "../../images/pizza-cut.jpg";

function About() {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <div className="about-us">
              <Heading head="About us" />
              <p>
                In just a couple of years, we have opened 6 outlets in different
                cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the
                future we plan to develop the network in other major cities of
                Russia.
              </p>
              <div className="about-pizza">
                <div className="second-layer">
                  <img src={tomato} alt="tomato pizza" />
                  <img src={argentina} alt="argentina pizza" />
                </div>
                <div className="first-layer">
                  <img src={italian} alt="italian pizza" />
                  <img src={meat} alt="meat pizza" />
                  <img src={cheese} alt="cheese pizza" />
                </div>
              </div>
              <p>
                The kitchen of each point is at least: 400-500 sq. m. meters,
                hundreds of employees, smoothly performing work in order to
                receive / prepare / form / deliver customer orders on time.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6 p-3 flex-container flex-align-center">
            <Banner pizza={about} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
