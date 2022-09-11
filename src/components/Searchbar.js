import React, { useState } from 'react'

function Searchbar(props) {
  const [search, setSearch] = useState('');
  const { onSearch } = props;

  function onChangeHandler(e) {
    setSearch(e.target.value);

    if (e.target.value.length === 0) {
      onSearch(undefined)
    }
  }

  function onButtonClickHandler() {
    onSearch(search)
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
    </div>
  )
}

export default Searchbar