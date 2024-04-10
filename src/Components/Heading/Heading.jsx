import React from "react";

function Heading(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading flex-container flex-justify-center py-5">
              <h1>{props.head}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
