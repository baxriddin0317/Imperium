import React, { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import LoginForm from '../../Components/LoginForm/LoginForm';
import './Login.scss';

function Login() {
    const [span, setSpan] = useState(true);

    
  return <div className='login'>
      <Header />
      <div className="login__content">
          <div className="container">
            <div className="login__block">
                <h2 className="login__block-title">
                Вход
                </h2>
                <div className="login__block-menu">
                    <span className={`login__block-item ${span ? "active" : ""}`} onClick={() => setSpan(true)}>
                    Пассивный зароботок
                    </span>
                    <span className={`login__block-item ${!span ? "active" : ""}`} onClick={() => setSpan(false)}>
                    Публичный трейдинг
                    </span>
                </div>

                {
                    span ? <LoginForm /> : "bu page figma maketda keltirilmapdi :("
                }

            </div>
          </div>
      </div>

        {/* ====== footer ====== */}
        <Footer />
  </div>;
}

export default Login;
