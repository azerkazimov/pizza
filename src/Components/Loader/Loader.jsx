import React, { useEffect, useState } from "react";
import slice from "../../images/PIZZA MODERN LOGO DESIGN.png";
import slice2 from "../../images/PIZZA MODERN LOGO DESIGN (1).png";
import slice3 from "../../images/PIZZA MODERN LOGO DESIGN (2).png";
import slice4 from "../../images/PIZZA MODERN LOGO DESIGN (3).png";

function Loader() {
  const [loader, setLoader] = useState(slice);

  useEffect(() => {
    const slices = [slice, slice2, slice3, slice4];
    let currentSliceIndex = 0;

    const intervalId = setInterval(() => {
      currentSliceIndex = (currentSliceIndex + 1) % slices.length;
      setLoader(slices[currentSliceIndex]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="loader">
      <div className="loader-svg">
        <img src={loader} alt="" />
      </div>
    </div>
  );
}

export default Loader;
