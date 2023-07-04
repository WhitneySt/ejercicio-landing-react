import React from 'react';
import './button.scss';

const Button = ({ text, styles = "" }) => {
  //const { text, className = "" } = props;
  return <button className={styles}>{text}</button>;
};

export default Button;