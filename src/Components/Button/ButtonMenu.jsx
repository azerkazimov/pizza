import React from "react";

function ButtonMenu(props) {
  return (
    <div
      className={`btn-menu ${props.active ? "active-btn" : ""}`}
      onClick={props.onClick}
    >
      <span>{props.name}</span>
    </div>
  );
}

export default ButtonMenu;
