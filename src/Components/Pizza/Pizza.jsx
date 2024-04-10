import React, { useEffect, useState } from "react";
import pizza from "../../images/pizza/italian.png";

function Pizza() {
  const [count, setCount] = useState(1);
  const fixPrice = 9.95;
  const [price, setPrice] = useState(fixPrice);

  useEffect(() => {
    setPrice((count * fixPrice).toFixed(2));
  }, [count, fixPrice]);

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="pizza-item">
        <img src={pizza} alt="" />
        <h3>Italian</h3>
        <p>Description</p>
        <div className="pizza-size">
          <span>22</span>
          <span>28</span>
          <span>32</span>
        </div>
        <div className="btn-ingridient">+ Ingridients</div>
        <div className="pizza-price">
          <div className="price">{price}$</div>
          <div className="count">
            <span onClick={handleDecrement}>-</span>
            <span>{count}</span>
            <span onClick={() => setCount(count + 1)}>+</span>
          </div>
        </div>
        <div className="btn-order">Order Now</div>
      </div>
    </div>
  );
}

export default Pizza;
