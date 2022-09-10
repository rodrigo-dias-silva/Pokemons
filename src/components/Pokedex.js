import React from 'react'
import Pagination from './Pagination';
import Pokemon from './Pokemon'

function Pokedex(props) {
  const { pokemons, loading, page, setPage, totalPages } = props;

  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1)
    }
  }

  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1)
    }
  }

  return (
    <div className='px-5'>
      <div className='flex flex-row justify-between items-center p-5'>
        <h1>Pokedex</h1>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
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