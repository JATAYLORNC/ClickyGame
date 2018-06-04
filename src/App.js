import React from 'react';
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    status: "Click an image to begin!",
    currentScore: 0,
    topScore: 0
  };

  changeScore = (point) => {

    if(point===0) {
      this.setState({currentScore: 0});
      this.setState({status: "You guessed incorrectly!"})
    } else {  
      let currentScore = this.state.currentScore + point;  
      this.setState({currentScore: currentScore});
      this.setState({status: "You guessed correctly!"})

      if(this.state.currentScore >= this.state.topScore) {
        this.setState({topScore: currentScore});
      }
    }
  }

  render() {
    return (
      <Wrapper>
        <Navbar status={this.state.status} currentScore={this.state.currentScore} topScore={this.state.topScore} />
        <Header />
        <GameBoard changeScore={this.changeScore} />
        <Footer />
      </Wrapper>
    )
  }
}

export default App;
