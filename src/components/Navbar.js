import React, { useContext } from 'react'
import FavoriteContext from '../contexts/favoriteContext'

function Navbar() {
  const { favoritePokemons } = useContext(FavoriteContext)

  return (
    <nav className='flex items-center justify-evenly flex-row h-24'>
      <div>
        <img
          className='w-40'
          alt="PokéAPI"
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        />
      </div>
      <div>{favoritePokemons.length}Favoritos</div>
    </nav>
  )
}

export default Navbar