import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../Assets/Img/logo.png';
import './Footer.scss';

// ======= navbar date =====
const navDate = [
    {
      name: 'Пассивный заработок',
      path: '/'
    },
    {
      name: 'Публичный трейдинг',
      path: '/about'
    },
    {
      name: 'Доходы и безопасность',
      path: '/info'
    },
    {
      name: 'Обратная связь',
      path: '/contact'
    }
]

function Footer() {

  // get location 
  const {pathname} = useLocation();
  const activeNav = navDate.findIndex(e => e.path === pathname);

  return (
      <footer className="footer">
          <div className="container footer__block">
            <div className="footer__box">
                <img src={Logo} alt="" />
                <p className="footer__box-text">
                криптовалютная платформа для управления инвестициями.
                </p>
            </div>
            <div className="footer__content">
                {navDate.length > 0 && (<ul>
                {navDate.map((date, index) => (
                    <li key={index} className={index === activeNav ? "active" : ""}>
                        <Link to={date.path} className='link'>{date.name}</Link>
                    </li>
                ))}
                </ul>)}

                <p>Политика конфиденциальности</p>
            </div>
          </div>
      </footer>
  );
}

export default Footer;
