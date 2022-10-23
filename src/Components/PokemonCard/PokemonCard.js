import React from 'react'
import { Card, PokemonName, PokemonType, EvolveButton } from './styles'



const PokemonCard = (props) => {

  const evoluirPokemon = () => {
    if (props.pokemon.name === 'Pichu') {
      props.setPokemon({
        ...props.pokemon,
        name: "Pikachu",
        evolved: true,
        weight: 6,
        image: 'https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png',
      })
    } else if (props.pokemon.name === 'Bronzor') {
      props.setPokemon1({
        ...props.pokemon1,
        name: "Bronzong",
        evolved: true,
        weight: 187,
        image: 'https://archives.bulbagarden.net/media/upload/thumb/a/aa/437Bronzong.png/250px-437Bronzong.png'
      })
    } else if (props.pokemon.name === 'Jigglypuff'){
      props.setPokemon2({
        ...props.pokemon2,
        name: 'Wigglytuff',
        evolved: true, 
        weight: 12,
        image: 'https://archives.bulbagarden.net/media/upload/thumb/9/92/040Wigglytuff.png/250px-040Wigglytuff.png'
      })
    }
  }


  return (
    <Card color={props.pokemon.color}>
      <img src={props.pokemon.image} alt={`Pokemon`} />
      <PokemonName>{props.pokemon.name}</PokemonName>
      <PokemonType>{props.pokemon.type}</PokemonType>
      <p>{props.pokemon.weigth}kg</p>

      <EvolveButton onClick={() => evoluirPokemon(props.setPokemon, props.setPokemon1, props.setPokemon2)}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard