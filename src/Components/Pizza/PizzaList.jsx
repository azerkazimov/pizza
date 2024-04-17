import React from "react";
import Pizza from "./Pizza";
import useCardStore from "../store/cardStore";

function PizzaList({ pizzas }) {
  const firstFourPizza = pizzas.slice(0, 4);
  const afterFourPizza = pizzas.length > 4 ? pizzas.slice(4) : [];
  const { card, removeFromCard, clearCard } = useCardStore((state) => ({
    card: state.card,
    removeFromCard: state.removeFromCard,
    clearCard: state.clearCard,
  }));

  return (
    <div id="pizza-list">
      <div className="container">
        <div className="row">
          {firstFourPizza.map((pizza) => (
            <Pizza
              key={pizza.id}
              id={pizza.id}
              category={pizza.category}
              name={pizza.name}
              price={pizza.price}
              image={pizza.image}
              description={pizza.description}
            />
          ))}

          <div className="col-12">
            <div className="popular">
              <h1>MOST POPULAR PIZZA</h1>
            </div>
          </div>

          {afterFourPizza.map((pizza) => (
            <Pizza
              key={pizza.id}
              id={pizza.id}
              category={pizza.category}
              name={pizza.name}
              price={pizza.price}
              image={pizza.image}
              description={pizza.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PizzaList;
