import React, { useState } from 'react';
import Chart from '../Chart/Chart';
import "./Statistika.scss";

function Statistika() {
    const [rightBtn, setRightBtn] = useState(true);
    const [Btn, setBtn] = useState(true);
    const handleLeftClass = (evt) => {
        const remov = document.querySelector(".activeBtn");
        remov.classList.remove("activeBtn");

        evt.currentTarget.classList.add("activeBtn");
    }

  return (
    <div className='static'>
        <div className="static__head">
            <div className="static__head-left">
                <img src="https://picsum.photos/200/300" alt="" />
                <h2>Моя статистика</h2>
            </div>
            <div className="static__head-right">
                <span>
                    <small>Текущий депозит</small>
                    <p>$ 4550</p>
                </span>
                <span>
                    <small>общий доход за месяц</small>
                    <p>$ 4550</p>
                </span>
                <span>
                    <small>доход по futures счету</small>
                    <p>$ 4550</p>
                </span>
                <span>
                    <small>доход по spot счету</small>
                    <p>$ 4550</p>
                </span>
            </div>
        </div>

        <div className="static__btns">
            <div className="static__btns-left">
                <button className='left-btn' onClick={handleLeftClass}>Сегодня</button>
                <button className='left-btn' onClick={handleLeftClass}>7 дней</button>
                <button className='activeBtn left-btn' onClick={handleLeftClass}>30 дней</button>
                <button className='left-btn' onClick={handleLeftClass}>100 дней</button>
                <span className='static__btns-line'></span>
                <span className='static__btns-info'>Доход за 7 дней: 15%</span>
            </div>
            <div className="static__btns-right">
                <button className={Btn ? `activeBtn` : ""} onClick={() => setBtn(true)}>SPOT</button>
                <button className={Btn ? "" : `activeBtn`} onClick={() => setBtn(false)}>FUTURES</button>
            </div>
        </div>

        <div className="static__content">
            <div className="static__content-box">
                <button className={rightBtn ? `activeBtn` : ""} onClick={() => setRightBtn(true)}>Статистика</button>
                <button className={rightBtn ? '' : `activeBtn`} onClick={() => setRightBtn(false)}>История сделок</button>
            </div>
            <Chart />
        </div>
    </div>
  )
}

export default Statistika