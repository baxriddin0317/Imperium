import React from 'react';
import './Last.scss';
import Lastbg from '../../Assets/Img/lastbg.png';

function Last() {
  return <div className='last'>
      <div className="container last__section">
            <h2 className="last__section-title">
            Telegram трейдинг уже в прошлом
            </h2>
            <p className="last__section-text">
            Мы не смогли изложить здесь даже половину всех преимуществ нашей платформы, поэтому просто предлагаем самостоятельно окунуться в будущее трейдинга и пассивного заработка
            </p>

            <div className="last__section-block">
                <img src={Lastbg} width={440} alt="" />

                <ul className="last__section-list">
                    <li className="last__section-item">
                        <div className="last__section-icon">
                            <div className="last__section-icon-before"></div>
                            <i className='bx bxs-food-menu'></i>
                            <div className="last__section-icon-after"></div>
                        </div>
                        <h3 className="last__section-name">
                        Большие доходы
                        </h3>
                        <p className="last__section-text">
                        Профессиональные трейдеры могут увеличивать депозит на 30%, 50% и даже 100% за месяц с минимальными рисками
                        </p>
                    </li> 
                    <li className="last__section-item">
                        <div className="last__section-icon">
                            <div className="last__section-icon-before"></div>
                            <i className='bx bxs-food-menu'></i>
                            <div className="last__section-icon-after"></div>
                        </div>
                        <h3 className="last__section-name">
                        Большие доходы
                        </h3>
                        <p className="last__section-text">
                        Профессиональные трейдеры могут увеличивать депозит на 30%, 50% и даже 100% за месяц с минимальными рисками
                        </p>
                    </li> 
                    <li className="last__section-item">
                        <div className="last__section-icon">
                            <div className="last__section-icon-before"></div>
                            <i className='bx bxs-food-menu'></i>
                            <div className="last__section-icon-after"></div>
                        </div>
                        <h3 className="last__section-name">
                        Большие доходы
                        </h3>
                        <p className="last__section-text">
                        Профессиональные трейдеры могут увеличивать депозит на 30%, 50% и даже 100% за месяц с минимальными рисками
                        </p>
                    </li> 
                    <li className="last__section-item">
                        <div className="last__section-icon">
                            <div className="last__section-icon-before"></div>
                            <i className='bx bxs-food-menu'></i>
                            <div className="last__section-icon-after"></div>
                        </div>
                        <h3 className="last__section-name">
                        Большие доходы
                        </h3>
                        <p className="last__section-text">
                        Профессиональные трейдеры могут увеличивать депозит на 30%, 50% и даже 100% за месяц с минимальными рисками
                        </p>
                    </li> 
                </ul>

            </div>
                <button>Зарегистрироваться</button>
      </div>
  </div>;
}

export default Last;
