import React from "react";
import Pizza from "./Pizza";

function PizzaList() {
  return (
    <div id="pizza-list">
      <div className="container">
        <div className="row">
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
        </div>
      </div>
    </div>
  );
}

export default PizzaList;
