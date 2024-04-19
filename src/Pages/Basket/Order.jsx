import React from "react";

function Order({ id, img, name, size, count, price }) {
  return (
    <div className="col-12 col-md-3 p-2">
      <div className="order-item" id={id}>
        <img src={process.env.PUBLIC_URL + img} alt={name} />
        <h3>{name}</h3>
        <div className="details">
          <p>
            Size: <span>{size}</span>
          </p>
          <p>
            Amount: <span>{count}</span>
          </p>
        </div>
        <h4>
          Price: <span>{price}</span>
        </h4>
      </div>
    </div>
  );
}

export default Order;
