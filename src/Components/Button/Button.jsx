import React from "react";

function Button(props) {
  return (
    <div className="btn">
      <span>{props.name}</span>
    </div>
  );
}

export default Button;
