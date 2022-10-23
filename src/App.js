import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png',
    id: 0
  })
  const [pokemon1, setPokemon1] = useState({
    name: "Bronzor",
    type: "Psychic / Steel",
    evolved: false,
    weight: 60,
    color: 'Bronze',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/c/c1/436Bronzor.png/250px-436Bronzor.png',
    id: 1
  })
  const [pokemon2, setPokemon2] = useState({
    name: "Jigglypuff",
    type: "Normal / Fairy",
    evolved: false,
    weight: 5.5,
    color: 'Pink',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/3/3e/039Jigglypuff.png/250px-039Jigglypuff.png',
    id: 2
  })
  // Para fazer seus próximos pokemons, crie novos estados!

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard 
      pokemon={pokemon}
      setPokemon={setPokemon}
      />
      <PokemonCard
      pokemon={pokemon1}
      setPokemon1={setPokemon1}
      />
      <PokemonCard
      pokemon={pokemon2}
      setPokemon2={setPokemon2}
      />
      {/* Crie aqui seus próximos pokemons! */}
      
    </FlexContainer>
  </>
    
  );
}

export default App;
