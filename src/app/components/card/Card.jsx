import React from "react";
import './card.scss';

const Card = ({ user }) => {
  return (
    <article className="card">
      <figure>
        <img src={user.image} alt={user.name} />
      </figure>
      <h3>{user.name}</h3>
      <span>{user.rol}</span>
      <p>{user.detail}</p>
    </article>
  );
};

export default Card;
