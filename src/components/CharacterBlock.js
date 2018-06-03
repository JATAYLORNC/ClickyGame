import React from "react";
import "../styles/CharacterBlock.css";

const CharacterBlock = (props) => (
      <button className="charButton">
        <img 
          src={props.image} 
          alt={props.name} 
        />
      </button>
);

export default CharacterBlock;






