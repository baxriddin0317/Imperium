import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.scss';

function LoginForm() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    window.localStorage.setItem("email", "xoja@gmail.com");
    window.localStorage.setItem("password", "1717");

    const hanldeSubmit = () => {
        let getEmail = window.localStorage.getItem("email");
        let getPassword = window.localStorage.getItem("password");
       
        if(emailRef.current.value === getEmail && passwordRef.current.value === getPassword){
            navigate("/kabinet");
        }
    }

  return (
      <form action="#" className="form">
          <input type="email" ref={emailRef} placeholder='xoja@gmail.com deb yozasiz' />
          <input type="password" ref={passwordRef} placeholder='Пароль' />

          <div>
              <button onClick={() => hanldeSubmit()}>Войти</button>
              <Link to={'/'}>Забыли пароль?</Link>
          </div>

          <span></span>

          <div>
              <small>
              Еще нет аккаунта?
              </small>
              <Link to={"/registr"} className='link'>Зарегистрироваться</Link>
          </div>
      </form>
  );
}

export default LoginForm;
