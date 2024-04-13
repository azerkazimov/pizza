import React from "react";

function Event({title, image}) {
  return (
    <div className="event-item">
      <img src={image} alt="" />
      <h4>{title}</h4>
      <div className="btn-event">More</div>
    </div>
  );
}

export default Event;
