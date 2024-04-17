import React from "react";
import Navbar from "../Navbar/Navrbar";
import useCardStore from "../store/cardStore";

function Basket() {
  const card = useCardStore((state) => state.card);

  console.log(card);

  return (
    <div id="basket">
      <Navbar />
    </div>
  );
}

export default Basket;
