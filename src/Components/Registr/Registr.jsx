import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Registr.scss';

function Registr() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const resetRef = useRef();

  const navigate = useNavigate();
    
  const handleSubmit = () => {
    window.localStorage.setItem("email", `${emailRef.current.value}`);
    
    if(passwordRef.current.value === resetRef.current.value){
      window.localStorage.setItem("password", `${passwordRef.current.value}`);
      navigate("/kabinet")
    }else{
      document.querySelector(".resetPassword").innerHTML = "Parolni takrorlashda hatolik";
    }
  }

  return (
    <form onSubmit={e => e.preventDefault()} className="registr__form form">
        <input ref={emailRef} type="email" placeholder='Email' />
        <input ref={passwordRef} type="password" placeholder='Пароль' />
        <div className="form__box">
          <input ref={resetRef} type="password" placeholder='Повторить пароль' />
          <small className='error  resetPassword'></small>
        </div>

        <button className='registr__btn' onClick={() => handleSubmit()}>Зарегистрироваться</button>

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
