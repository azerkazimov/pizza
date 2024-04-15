import React, { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import ButtonMenu from "../Button/ButtonMenu";
import PizzaList from "../Pizza/PizzaList";
// import data from "../../db/pizza.json";
import axios from "axios";

function Menu() {
  const [activeButton, setActiveButton] = useState("Show all");
  const [data, setData] = useState([]);

  const handleButtonClick = (name) => {
    setActiveButton(name);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5003/pizzas")
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredPizzas =
    activeButton === "Show all"
      ? data
      : data.filter((pizza) => pizza.category === activeButton);

  return (
    <div id="menu">
      <Heading head="Menu" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="btn-store">
              <ButtonMenu
                name="Show all"
                active={activeButton === "Show all"}
                onClick={() => handleButtonClick("Show all")}
              />
              <ButtonMenu
                name="Meat"
                active={activeButton === "Meat"}
                onClick={() => handleButtonClick("Meat")}
              />
              <ButtonMenu
                name="Vegetarian"
                active={activeButton === "Vegetarian"}
                onClick={() => handleButtonClick("Vegetarian")}
              />
              <ButtonMenu
                name="Sea product"
                active={activeButton === "Sea product"}
                onClick={() => handleButtonClick("Sea product")}
              />
              <ButtonMenu
                name="Mushroom"
                active={activeButton === "Mushroom"}
                onClick={() => handleButtonClick("Mushroom")}
              />
            </div>
          </div>
        </div>
      </div>
      <PizzaList pizzas={filteredPizzas} />
    </div>
  );
}

export default Menu;
