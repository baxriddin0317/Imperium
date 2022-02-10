import React, { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../Assets/Img/logo.png';
import './Header.scss';

// ======= navbar date =====
const navDate = [
  {
    name: 'Пассивный заработок',
    path: '/'
  },
  {
    name: 'Публичный трейдинг',
    path: '#about'
  },
  {
    name: 'Доходы и безопасность',
    path: '#info'
  },
  {
    name: 'Обратная связь',
    path: '#contact'
  }
]

function Header() {

  // get location 
  const {pathname} = useLocation();
  const activeNav = navDate.findIndex(e => e.path === pathname);
  // navigatsiya
  const navigate = useNavigate();

  //header scroll bolgandegi events
  const headerRef = useRef();
  const listRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(document.documentElement.scrollTop > 80){
        headerRef.current.classList.add("scroll");
      }else {
        headerRef.current.classList.remove("scroll");
      }

      return () => {
        window.removeEventListener("scroll");
      }
    })
  }, [])

  return (
    <div className='header' ref={headerRef}>
        <div className="container">
          <Link to={"/"}>
          <img src={Logo} alt="" />
          </Link>
          <button className='open-btn' onClick={() => listRef.current.classList.add("active")}>
            <i className='bx bx-menu-alt-left'></i>
          </button>
          <div className="menu">
          
            {navDate.length > 0 && (<ul ref={listRef}>
              <i className='bx bx-log-out-circle close' onClick={() => listRef.current.classList.remove("active")}></i>
              {navDate.map((date, index) => (
                <li key={index} className={index === activeNav ? "active" : ""} 
                    onClick={() => listRef.current.classList.remove("active")}
                  >
                  <Link to={date.path} className='link'>{date.name}</Link>
                </li>
              ))}
            </ul>)}

            <button className='header__btn' onClick={() => navigate("/kirish")}>
              <i className='bx bxs-user'></i>
              Вход
            </button>
          </div>

        </div>
    </div>
  );
}

export default Header;
