import React from "react";

import styles from "./Button.module.css";
//using styled components
// import styles from "styled-components";
/* 
const Button = styles.button`
  padding: 0.5rem 1.5rem;
  background: #8b005d;
  border: 1px solid #8b005d;
  cursor: pointer;
  color: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  font: inherit;
  width: 100%;

@media (min-width: 768px) {
  width: auto;
}
  
&:focus {
  outline: none;
}

&:hover,
&:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);

`; 
*/

const Button = (props) => {
  return (
    <div className={styles.goal__button}>
      <button>{props.children}</button>
    </div>
  );
};

export default Button;
