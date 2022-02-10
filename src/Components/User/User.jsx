import React from 'react';
import './user.scss';
import Ivan from '../../Assets/Img/ivan.png';
import Biznes from '../../Assets/Img/biznes.png';
import { Link } from 'react-router-dom';

function User({setModal}) {

return <div className='user'>
    <div className="user__top">
        <div className="user__top-box">
            <img src={Ivan} alt="" />
            <h2 className="user__top-title">
            Иван Иванов
            </h2>
        </div>
        <div className="user__top-block">
            <span className="user__top-span">
                <p>Подписчиков</p>
                <div>
                <i className='bx bx-group' ></i>
                    1200
                </div>
            </span>
            <span className="user__top-span">
                <p>Общая прибыль</p>
                <div>
                <i className='bx bx-money' ></i>
                    $ 2500
                </div>
            </span>
        </div>
    </div>

    <div className="user__main">
        <h3 className="user__main-title">
        Ваши каналы
        </h3>

        <div className="user__main-section">
            <div className="user__main-spot spot">
                <div className="spot__head">
                    SPOT
                </div>

                <div className="spot__box">
                    <div>
                        <img src={Biznes} alt="" />
                        <h3>Первый бизнес канал</h3>
                    </div>

                    <div>
                        <span>
                        <i className='bx bx-trash-alt'></i>
                        </span>
                        <span>
                        <i className='bx bx-edit-alt'></i>
                        </span>
                    </div>
                </div>

                <ul className="spot__list">
                    <li className="spot__item">
                        <small>Биржа</small>
                        <span>
                        <i className='bx bxs-pyramid'></i>
                        Binance
                        </span>
                    </li>
                    <li className="spot__item">
                        <small>Биржа</small>
                        <span>
                        <i className='bx bxs-pyramid'></i>
                        Binance
                        </span>
                    </li>
                    <li className="spot__item">
                        <small>Биржа</small>
                        <span>
                        <i className='bx bxs-pyramid'></i>
                        Binance
                        </span>
                    </li>
                    <li className="spot__item">
                        <small>Биржа</small>
                        <span>
                        <i className='bx bxs-pyramid'></i>
                        Binance
                        </span>
                    </li>
                    <li className="spot__item">
                        <small>Биржа</small>
                        <span>
                        <i className='bx bxs-pyramid'></i>
                        Binance
                        </span>
                    </li>
                    <li className="spot__item">
                        <small>Биржа</small>
                        <span>
                        <i className='bx bxs-pyramid'></i>
                        Binance
                        </span>
                    </li>
                    
                </ul>

                <div className="spot__bottom">
                    <small>Дата создания: 12.05.2020</small>
                    <Link to={"#"}>Cтраница канала</Link>
                </div>
            </div>

            <div className="user__main-futures futures">
                <div className="futures__head">
                    FUTURES
                </div>

                <div className="futures__main">
                    <span onClick={() => setModal(true)}>
                    <i className='bx bx-plus'></i>
                    </span>

                    Создать канал
                </div>

                <Link to={"#"}>Инструкция по подключению</Link>
            </div>
        </div>
    </div>
  </div>;
}

export default User;
