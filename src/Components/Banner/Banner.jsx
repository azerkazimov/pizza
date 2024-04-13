import React from "react";
import slice from "../../images/pizza-slice.png";
import fries from "../../images/fries.png";

function Banner({ pizza }) {
  return (
    <div className="banner-image">
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
  );
}

export default Banner;
