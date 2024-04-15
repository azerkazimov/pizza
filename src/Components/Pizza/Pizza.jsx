import React, { useEffect, useState } from "react";

function Pizza({ id, category, name, price, image, description }) {
  const [count, setCount] = useState(1);
  const fixPrice = price;
  const [prices, setPrice] = useState(fixPrice);
  const [imgSize, setImgSize] = useState("1");

  useEffect(() => {
    setPrice((count * fixPrice).toFixed(2));
  }, [count, fixPrice]);

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
      <div className="pizza-item" id={id} category={category}>
        <img
          src={process.env.PUBLIC_URL + image}
          style={{ transform: `scale(${imgSize})` }}
          alt=""
        />
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="pizza-size">
          <span onClick={() => handleImgSize("1")}>S</span>
          <span onClick={() => handleImgSize("1.2")}>M</span>
          <span onClick={() => handleImgSize("1.3")}>L</span>
        </div>
        <div className="btn-ingridient">+ Ingridients</div>
        <div className="pizza-price">
          <div className="price">{prices}$</div>
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
