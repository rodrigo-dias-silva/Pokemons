import { ArrowArcLeft, ArrowArcRight } from 'phosphor-react';
import React from 'react'

function Pagination(props) {
  const { page, totalPages, onLeftClick, onRightClick } = props;

  return (
    <div className='flex items-center'>
      <button
        onClick={onLeftClick}
      >
        <ArrowArcLeft />
      </button>
      <div>{page} de {totalPages}</div>
      <button
        onClick={onRightClick}
      >
        <ArrowArcRight />
      </button>
    </div>
  )
}

export default Pagination