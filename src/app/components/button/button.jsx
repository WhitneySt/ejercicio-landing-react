import React from "react";
import "./button.scss";

const Button = ({ text, styles = "" }) => {
  //const { text, className = "" } = props;
  return (
    <button className={styles ? `button__${styles}` : "button"}>{text}</button>
  );
};

export default Button;
