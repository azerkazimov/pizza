import React from "react";
import useCardStore from "../../Components/store/cardStore";
import Order from "./Order";

function Basket() {
  const card = useCardStore((state) => state.card);
  return (
    <div id="basket">
      <div className="container">
        <div className="row">
          {card.map((item) => (
            <Order
              key={item.id}
              img={item.image}
              name={item.name}
              size={item.size}
              count={item.count}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Basket;
