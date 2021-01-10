import React from 'react';
import './Card.css';

function Card({ img, title, description, date }) {
  return (
    <div data-Aos="fade-in" className="card">
      <img src={img} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{date}</h3>
      </div>
    </div>
  );
}

export default Card;
