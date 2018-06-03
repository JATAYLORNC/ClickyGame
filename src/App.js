import React from 'react';
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container";
import CharacterCard from "./components/CharacterCard";
import Footer from "./components/Footer";
import characters from "./characters.js"

class App extends React.Component {
  state = {
    characters: characters
  };

  render() {
    return (
      <Wrapper>
        <Navbar />
        <Header />
        <Container>
          {this.state.characters.map(character => (
            <CharacterCard 
                _id={character.id}
                name={character.name}
                image={character.image}
              />
          ))}
        </Container>
        <Footer />
      </Wrapper>
    )
  }
}

export default App;
