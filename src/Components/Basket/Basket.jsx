import React from "react";
import useCardStore from "../store/cardStore";

function Basket() {
  const card = useCardStore((state) => state.card);
  console.log(card);
  return (
    <div id="basket">
      <div className="container">
        <div className="row">
          {card.map((item) => (
            <h1>{item.name}</h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Basket;
