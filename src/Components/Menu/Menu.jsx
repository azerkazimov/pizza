import React, { useState } from "react";
import Heading from "../Heading/Heading";
import ButtonMenu from "../Button/ButtonMenu";
import PizzaList from "../Pizza/PizzaList";

function Menu() {
  const [activeButton, setActiveButton] = useState("Show all");

  const handleButtonClick = (name) => {
    setActiveButton(name);
  };

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
      <PizzaList />
    </div>
  );
}

export default Menu;
