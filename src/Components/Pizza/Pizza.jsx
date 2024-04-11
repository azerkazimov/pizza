import React, { useEffect, useState } from "react";
import pizza from "../../images/pizza/italian.png";
// import data from "../../db/pizza.json";
// import axios from "axios";

function Pizza() {
  const [count, setCount] = useState(1);
  const fixPrice = 9.95;
  const [price, setPrice] = useState(fixPrice);
  const [imgSize, setImgSize] = useState("100%");

  useEffect(() => {
    setPrice((count * fixPrice).toFixed(2));
  }, [count, fixPrice]);

//   useEffect(() => {
//     axios.get(data)
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleImgSize = (size) => {
    setImgSize(size);
  };

  return (
    <div className="col-12 col-md-6 col-lg-3 p-2">
      <div className="pizza-item">
        <img src={pizza} style={{ width: imgSize }} alt="" />
        <h3>Italian</h3>
        <p>Description</p>
        <div className="pizza-size">
          <span onClick={() => handleImgSize("100%")}>22</span>
          <span onClick={() => handleImgSize("110%")}>28</span>
          <span onClick={() => handleImgSize("120%")}>32</span>
        </div>
        <div className="btn-ingridient">+ Ingridients</div>
        <div className="pizza-price">
          <div className="price">{price}$</div>
          <div className="count">
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        </div>
        <div className="btn-order">Order Now</div>
      </div>
    </div>
  );
}

export default Pizza;
