import React from 'react'
import { Link } from 'react-router-dom';
import "./Help.scss";

function Help() {
    
return (
    <div className="help">
        <div className="help__block">
            <h2 className="help__title">
            Обратная связь
            </h2>
            <p className="help__text">
            Если у вас остались вопросы напишите нам и наши менеджеры свяжуться с вами как можно быстрее
            </p>
            <form action="#" className="help__form" onSubmit={e => e.preventDefault()}>
                <div className="help__form-group">
                    <input className='help__form-control' type="text" placeholder='Ваше имя' />
                    <input className='help__form-control' type="email" placeholder='Ваш email' />
                </div>

                <textarea className='help__form-control' placeholder='Сообщение '></textarea>

                <button className='help__form-btn'>Отправить сообщение</button>
            </form>
            <hr />
            <span>Или напишите в наш телеграм: </span>
            <Link to={"/"}>@imperium.broker</Link>
        </div>
    </div>
  )
}

export default Help