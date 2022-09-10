import { Heart } from 'phosphor-react';
import React from 'react'

function Pokemon(props) {
  const { pokemon } = props
  const onHeartClick = () => {
    console.log("pode favoritar");
  }

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
            onClick={onHeartClick}
          >
            <Heart size={16} />
            <Heart size={16} weight={"fill"} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pokemon