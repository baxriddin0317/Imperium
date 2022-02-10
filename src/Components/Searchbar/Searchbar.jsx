import React from 'react';
import './Searchbar.scss';

function Searchbar({setSearch}) {

  return (
    <div className='bar'>
      <h2 className='bar__title'>
      Трейдеры
      </h2>
      <div className="bar__search">
        <div>
          <input type="text" placeholder='Поиск канала' onChange={(e) => setSearch(e.target.value)} />
          <i className='bx bx-search icoon-seach'></i>
          <button>Счёт <i className='bx bx-chevron-down'></i></button>
          <button>Уровень риска <i className='bx bx-chevron-down'></i></button>
        </div>

        <button>Сортировка <i className='bx bx-chevron-down'></i></button>
      </div>
    </div>
  )
}

export default Searchbar