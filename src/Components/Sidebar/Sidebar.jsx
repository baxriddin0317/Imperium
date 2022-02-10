import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

function Sidebar() {
  const handleClass = (evt) => {
    const remov = document.querySelector(".link-active");
    remov.classList.remove("link-active");

    evt.currentTarget.classList.add("link-active");
  } 

  return <div className='sidebar'>
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <Link className='link-active' to={""} onClick={handleClass}>
            <i className='bx bx-shopping-bag' ></i>
            Кабинет
          </Link>
        </li>
        <li className="sidebar__item">
          <Link to={"group"} onClick={handleClass}>
            <i className='bx bx-group' ></i>
            Трейдеры
          </Link>
        </li>
        <li className="sidebar__item">
          <Link to={"statistika"} onClick={handleClass}>
            <i className='bx bx-bar-chart-alt-2' ></i>
            Статистика
          </Link>
        </li>
        <li className="sidebar__item">
          <Link to={"instructions"} onClick={handleClass}>
            <i className='bx bx-notepad' ></i>
            Инструкции
          </Link>
        </li>
        <li className="sidebar__item">
          <Link to={"help"} onClick={handleClass}>
            <i className='bx bx-error-circle' ></i>
            Помощь
          </Link>
        </li>
      </ul>
  </div>;
}

export default Sidebar;
