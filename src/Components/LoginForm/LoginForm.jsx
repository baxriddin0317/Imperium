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
       
        let emailVal = emailRef.current.value;
        let passwordVal = passwordRef.current.value;
        // ======= input maydonlarini togri kiritish uchun bir qancha shrtlar =======
        if (emailVal === ""){
            document.querySelector(".emailError").innerHTML = "Email maydonini to`ldiring";
        }else if(passwordVal === "") {
            document.querySelector(".passwordError").innerHTML = "Password maydonini to`ldiring";
        } 
        
        if(emailVal === getEmail && passwordVal === getPassword){
            navigate("/kabinet");
        }else {
            document.querySelector(".passwordError").innerHTML = "Siz ro`yhatdan o`tmagansiz !!!";
        }
    }


  return (
      <form className="form" onSubmit={e => e.preventDefault()}>
          <div className="form__box">
            <input type="email" ref={emailRef} placeholder='Email' />
            <small className='error emailError'></small>
          </div>
         <div className="form__box">
            <input type="password" ref={passwordRef} placeholder='Пароль' />
            <small className='error passwordError'></small>
         </div>

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
