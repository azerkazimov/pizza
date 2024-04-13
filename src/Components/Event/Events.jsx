import React from "react";
import Event from "./Event";
import Heading from "../Heading/Heading";
import cooking from "../../images/popular.jpg";
import blog from "../../images/pizza-cut.jpg";
import giweAway from "../../images/give-away.jpg";
import kitchen from "../../images/kitchen.jpg";
import freeCoffee from '../../images/free-coffee.jpg'
import instagram from '../../images/instagram.jpg'
import choose from '../../images/choose-us.jpg'

function Events() {
  return (
    <div id="event">
      <div className="container">
        
        <div className="row">
          <div className="col-6 col-lg-4">
            <Event title="How we cooking" image={cooking} />
          </div>
          <div className="col-6 col-lg-4">
            <Event title="Our blog" image={blog} />
          </div>
          <div className="col-12 col-lg-4 flex-container flex-column flex-align-end flex-justify-end py-4">
            <Heading head="Event" />
            <p>
              There are regular events in our pizzeria that will allow you to
              eat delicious food for a lower price!
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <Event title="Two pizza for 1 price" image={giweAway} />
          </div>
          <div className="col-6">
            <Event title="Kitchen tour" image={kitchen} />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-4">
            <Event title="Free coffee for 3 pizza" image={freeCoffee} />
          </div>
          <div className="col-12 col-lg-4">
            <Event title="Our instagram" image={instagram} />
          </div>
          <div className="col-12 col-lg-4">
            <Event title="Where are you choose us?" image={choose} />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Events;
