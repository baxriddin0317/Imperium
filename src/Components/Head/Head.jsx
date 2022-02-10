import './Head.scss';
import React, { useState } from 'react';
import Logo from "../../Assets/Img/logo.png";

function Head() {

  const [drop, setdrop] = useState(false);
  const [profilDrop, setProfilDrop] = useState(false);

  return <div className='head'>
      <img src={Logo} alt="" />

      <div className="head__content">
          <button className="head__content-btn">
          Трейдер
          </button>
          <small>
          <i className='bx bx-wallet-alt'></i>
          $  55 000
          </small>
          <div className="head__content-dropdown til">
              <div className="box" onClick={() => {
                setdrop(!drop);
                if(profilDrop)
                  setProfilDrop(false);
              }}>RU <i className='bx bxs-down-arrow burchak'></i></div>
              <ul className={`head__content-list ${drop ? "active" : ""}`}>
                <li className="head__content-item">
                    <i className='bx bx-bar-chart'></i>
                    Uz
                </li>
              </ul>
          </div>

          <div className="head__content-dropdown">
              <div className="box" onClick={() => {
                setProfilDrop(!profilDrop);
                if(drop){
                  setdrop(false);
                }
              }}>
                <div>
                  <i className="bx bxs-user" /> 
                  <i className="bx bxs-down-arrow burchak" />
                </div>

              </div>
              <ul className={`head__content-list ${profilDrop ? "active" : ""}`}>
                <li className="head__content-item">
                    <i className='bx bx-bar-chart'></i>
                    Управление балансом
                </li>
                <li className="head__content-item">
                    <i className='bx bx-cog'></i>
                    Настройки
                </li>
                <li className="head__content-item">
                    <i className='bx bx-log-in'></i>
                    Выйти
                </li>
              </ul>
          </div>
      </div>
  </div>;
}

export default Head;
