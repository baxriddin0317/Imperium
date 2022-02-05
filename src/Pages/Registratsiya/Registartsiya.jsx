import './Registratsiya.scss';
import React, { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import RegistrImg from "../../Assets/Img/registr.png";
import Registr from "../../Components/Registr/Registr";

function Registartsiya() {

  const [span, setSpan] =useState(true);

  return <div className='registr'>
    <Header />

    <div className="registr__content">
        <div className="container">
            <div className="registr__main">
              <img src={RegistrImg} alt="" />

              <div className="registr__block">
                <h2 className="registr__block-title">
                Регистрация
                </h2>
                <div className="registr__block-menu">
                    <span className={`registr__block-item ${span ? "active" : ""}`} onClick={() => setSpan(true)}>
                    Пассивный зароботок
                    </span>
                    <span className={`registr__block-item ${!span ? "active" : ""}`} onClick={() => setSpan(false)}>
                    Публичный трейдинг
                    </span>
                </div>

                {
                    span ? <Registr /> : "bu page figma maketda keltirilmapdi :("
                }

              </div>
            </div>
        </div>
    </div>

    <Footer />
  </div>;
}

export default Registartsiya;
