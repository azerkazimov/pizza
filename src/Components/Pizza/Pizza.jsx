import React, { useEffect, useState } from "react";

function Pizza({ id, category, name, price, image, description }) {
  const [count, setCount] = useState(1);
  const fixPrice = price;
  const [prices, setPrice] = useState(fixPrice);
  const [imgSize, setImgSize] = useState("1");
  const [orders, setOrder] = useState({});
  const [size, setSize] = useState("S");

  useEffect(() => {
    setPrice((count * fixPrice).toFixed(2));
  }, [count, fixPrice]);

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleImgSize = (sizeSelect) => {
    setImgSize(sizeSelect);
    setSize(sizeSelect === "1" ? "S" : sizeSelect === "1.2" ? "M" : "L");
  };

  const handleOrder = () => {
    const newOrder = {
      name: name,
      size: size,
      price: prices,
      count: count,
    };
    setOrder({ ...orders, newOrder });
  };

  return (
    <div className="col-12 col-md-6 col-lg-3 p-2">
      <div className="pizza-item" key={id} id={id} category={category}>
        <img
          src={process.env.PUBLIC_URL + image}
          style={{ transform: `scale(${imgSize})` }}
          alt=""
        />
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="pizza-size">
          <span
            className={size === "S" ? "selected" : ""}
            onClick={() => handleImgSize("1")}
          >
            S
          </span>
          <span
            className={size === "M" ? "selected" : ""}
            onClick={() => handleImgSize("1.2")}
          >
            M
          </span>
          <span
            className={size === "L" ? "selected" : ""}
            onClick={() => handleImgSize("1.3")}
          >
            L
          </span>
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
        <div className="btn-order" onClick={handleOrder}>
          Order Now
        </div>
      </div>
    </div>
  );
}

export default Pizza;
