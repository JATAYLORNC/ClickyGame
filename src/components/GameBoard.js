import React from "react";
import CharacterBlock from "./CharacterBlock";
import characters from "../characters.js";
import "../styles/GameBoard.css";

class GameBoard extends React.Component {

  state = {
    characters: characters,
    location: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    charGuess: []
  };

  renderSquare = (i) => {

    return <CharacterBlock image={this.state.characters[i].image} name={this.state.characters[i].name} id={this.state.characters[i]._id} addCharGuess={this.addCharGuess} />;

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

  renderGameBoard = () => {

    let blockLocation = this.shuffleLocation();      

    return (
      <div id="GameBoard">
        <div id="board-row-1">
          {this.renderSquare(blockLocation[0])}
          {this.renderSquare(blockLocation[1])}
          {this.renderSquare(blockLocation[2])}
          {this.renderSquare(blockLocation[3])}
        </div>
        <div id="board-row-2">
          
          {this.renderSquare(blockLocation[4])}
          {this.renderSquare(blockLocation[5])}
          {this.renderSquare(blockLocation[6])}
          {this.renderSquare(blockLocation[7])}
        </div>
        <div id="board-row-3">
          {this.renderSquare(blockLocation[8])}
          {this.renderSquare(blockLocation[9])}
          {this.renderSquare(blockLocation[10])}
          {this.renderSquare(blockLocation[11])}
        </div>
      </div>
    )
  }

  addCharGuess = (charID) => {

    if(this.state.charGuess.includes(charID)) {
      this.props.changeScore(0);
      this.setState({charGuess: []})
    } else {
      this.props.changeScore(1);
    this.state.charGuess.push(charID);
    this.setState({charGuess: this.state.charGuess});
    }
  }

  render() {

    return (
      this.renderGameBoard()
    )
  }
}

export default GameBoard;