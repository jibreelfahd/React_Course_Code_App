import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <div className="goal__button">
      <button>{props.children}</button>
    </div>
  );
};

export default Button;
