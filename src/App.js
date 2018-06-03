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

  render() {
    return (
      <Wrapper>
        <Navbar />
        <Header />
        <GameBoard />
        <Footer />
      </Wrapper>
    )
  }
}

export default App;
