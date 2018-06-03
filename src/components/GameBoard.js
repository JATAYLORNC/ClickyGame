import React from "react";
import CharacterBlock from "./CharacterBlock";
import characters from "../characters.js"
import "../styles/GameBoard.css"

class GameBoard extends React.Component {

  state = {
    characters: characters,
    location: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  };

  renderSquare = (i) => {

    return <CharacterBlock image={this.state.characters[i].image} name={this.state.characters[i].name} />;

  }

  shuffleLocation = () => {

    let location = this.state.location;
    let currentIndex = location.length;
    let temporaryValue;
    let randomIndex;

    while(currentIndex !== 0) {
      currentIndex -= 1;
      randomIndex = Math.floor(Math.random() * currentIndex);
      temporaryValue = location[currentIndex];
      location[currentIndex] = location[randomIndex];
      location[randomIndex] = temporaryValue;
    }

    return location;
  }

  render() {

    const newLocation = this.shuffleLocation();

    return (
      <div id="GameBoard">
        <div className="board-row">
          {this.renderSquare(newLocation[0])}
          {this.renderSquare(newLocation[1])}
          {this.renderSquare(newLocation[2])}
          {this.renderSquare(newLocation[3])}
        </div>
        <div className="board-row">
          
          {this.renderSquare(newLocation[4])}
          {this.renderSquare(newLocation[5])}
          {this.renderSquare(newLocation[6])}
          {this.renderSquare(newLocation[7])}
        </div>
        <div className="board-row">
          {this.renderSquare(newLocation[8])}
          {this.renderSquare(newLocation[9])}
          {this.renderSquare(newLocation[10])}
          {this.renderSquare(newLocation[11])}
        </div>
      </div>
    );
  }
}

export default GameBoard;