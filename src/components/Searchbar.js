import React, { useState } from 'react'
import { searchPokemon } from '../api'

function Searchbar() {
  const [search, setSearch] = useState('')
  const [pokemon, setPokemon] = useState();

  function onChangeHandler(e) {
    setSearch(e.target.value)
  }

  function onButtonClickHandler() {
    onSearchHandler(search)
  }

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result)
  }

  return (
    <div className='flex px-5 items-center gap-5'>
      <div>
        <input
          className='p-3 bg-white rounded shadow-md outline-none'
          placeholder='Buscar pokemon...'
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <button
          className='bg-yellow-500 rounded h-11 text-white font-bold border-solid border-4 border-blue-700 px-3 shadow-md '
          onClick={onButtonClickHandler}
        >
          Buscar
        </button>
      </div>
      {pokemon ? (
        <div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ) : null}
    </div>
  )
}

export default Searchbar