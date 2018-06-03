import React from "react";
import "../styles/CharacterCard.css";

const CharacterCard = (props) => (
      <img 
        src={props.image} 
        alt={props.name} 
        />
);

export default CharacterCard;






