import React from 'react'

function Pokemon(props) {
  const { pokemon } = props
  return (
    <div>
      <div>
        <img alt={pokemon.name} src={pokemon.sprites.front_default} />
      </div>
      <div>{pokemon.name}</div>
    </div>
  )
}

export default Pokemon