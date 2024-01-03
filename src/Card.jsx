// Card.js
import React from "react";
import "./Card.css";

const Card = ({ name, onClick }) => {

    return (
        <div className="card-container" onClick={onClick}>
            <h1 id="starwar-profile" className="card-content">{name}</h1>
        </div>
    )
}

export default Card;
