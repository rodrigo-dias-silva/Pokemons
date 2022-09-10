import React from 'react'
import Pokemon from './Pokemon'

function Pokedex(props) {
  const { pokemons, loading } = props;

  return (
    <div className='px-5'>
      <div className='flex flex-row justify-between items-center p-5'>
        <h1>Pokedex</h1>
        <span>Página: </span>
      </div>

      {loading ? (<div> Carregando...</div>)
        :
        (<div className='grid gap-3 grid-cols-3'>
          {pokemons && pokemons.map((pokemon, index) => {
            return (
              <Pokemon
                key={index}
                pokemon={pokemon}
              />
            )
          })}

        </div>)
      }

    </div >
  )
}

export default Pokedex