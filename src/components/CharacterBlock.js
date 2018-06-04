import React from "react";
import "../styles/CharacterBlock.css";

const CharacterBlock = (props) => {

  return (

    <button className="charButton" onClick={() => props.addCharGuess(props.id)}>
      <img 
        className="img-fluid"
        src={props.image} 
        alt={props.name} 
      />
    </button>
  );
}

export default CharacterBlock;






