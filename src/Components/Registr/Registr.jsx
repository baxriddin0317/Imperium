import React from 'react';
import { Link } from 'react-router-dom';
import './Registr.scss';

function Registr() {

    

  return (
    <form action="#" className="registr__form form">
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Пароль' />
        <input type="password" placeholder='Повторить пароль' />

        <button className='registr__btn'>Зарегистрироваться</button>

        <span></span>

        <div>
            <small>
            Уже зарегистрированы?
            </small>
            <Link to={"/kirish"} className='link'>Войти в аккаунт</Link>
        </div>
    </form>
  );
}

export default Registr;
