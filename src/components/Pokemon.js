import { Heart } from 'phosphor-react';
import React, { useContext } from 'react'
import FavoriteContext from '../contexts/favoriteContext';

function Pokemon(props) {
  const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext)
  const { pokemon } = props
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name)
  }

  const heart = favoritePokemons.includes(pokemon.name)
    ? <Heart size={16} weight={"fill"} />
    : <Heart size={16} />

  return (
    <div className='flex shadow-md rounded gap-3 p-2'>
      <div>
        <img className='w-16 h-16' alt={pokemon.name} src={pokemon.sprites.front_default} />
      </div>
      <div className='flex flex-col justify-between p-2 flex-1'>
        <div className='flex justify-between items-center'>
          <span className='capitalize font-bold'>{pokemon.name}</span>
          <span>#{pokemon.id}</span>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <div className='flex gap-3'>
            {pokemon.types.map((type, index) => {
              return (
                <div
                  className='capitalize'
                  key={index}
                >
                  {type.type.name}
                </div>
              )
            })}
          </div>
          <button
            className='bg-white shadow-md p-1 items-center'
            onClick={onHeartClick}
          >
            {heart}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pokemon