import React from 'react';
import './jumbotron.scss';
import Man from "../../Assets/Img/man.png";

function Jumbotron() {
  return (
      <div className="jumbotron">
          <div className="container">
              <div className="jumbotron__block">
                  <h2 className="jumbotron__title">
                    Инвестируй
                    с лучшими крипто-трейдерами
                  </h2>
                  <p className="jumbotron__text">
                  Сервис автоматического копирования сделок на криптовалютных биржах. 
                  </p>
                  <button className="jumbotron__btn">
                    Создать аккаунт
                  </button>
              </div>

            <img src={Man} alt="" />
          </div>
      </div>
  );
}


export default Jumbotron;
